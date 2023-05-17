import 'dart:math';
import 'package:flutter/material.dart';

///
import 'package:bonfire/bonfire.dart';

///
import '../sprite_sheet/sprite_sheet_player.dart';
import '../sprite_sheet/sprite_sheet_fire_ball.dart';
import '../util/custom_sprite_animation_widget.dart';
import '../controllers/human_player_controller.dart';
import 'boss.dart';
import 'orc.dart';

double tileSize = 20.0;

enum PlayerAttackType {
  attackMelee,
  attackRange,
  attackRangeShotguns,
}

class HumanPlayer extends SimplePlayer
    with
        Lighting,
        ObjectCollision,
        UseBarLife,
        UseStateController<HumanPlayerController> {
  static const assetsPath = 'game/mini_game/player/human';

  /// 第一次游玩
  bool firstPlayer = false;

  /// 最大速度
  static double maxSpeed = tileSize * 5;

  /// 最大地图大小
  static int maxMapSize = 1200;

  /// 移动锁
  bool lockMove = false;

  HumanPlayer(Vector2 position)
      : super(
          position: position,
          animation: SimpleDirectionAnimation(
            idleLeft: SpriteSheetPlayer.idleBottomLeft,
            idleRight: SpriteSheetPlayer.idleBottomRight,
            idleUp: SpriteSheetPlayer.idleTopRight,
            idleUpLeft: SpriteSheetPlayer.idleTopLeft,
            idleUpRight: SpriteSheetPlayer.idleTopRight,
            runLeft: SpriteSheetPlayer.runBottomLeft,
            runRight: SpriteSheetPlayer.runBottomRight,
            runUpLeft: SpriteSheetPlayer.runTopLeft,
            runUpRight: SpriteSheetPlayer.runTopRight,
            runDownLeft: SpriteSheetPlayer.runBottomLeft,
            runDownRight: SpriteSheetPlayer.runBottomRight,
          ),
          speed: maxSpeed,
          life: 500,
          size: Vector2.all(tileSize * 3.2),
        ) {
    /// 发光
    setupLighting(
      LightingConfig(
        radius: width * 2,
        blurBorder: width * 6,
        color: Colors.transparent,
      ),
    );

    /// 碰撞
    setupCollision(
      CollisionConfig(
        collisions: [
          CollisionArea.rectangle(
            size: Vector2(size.x * 0.2, size.y * 0.4),
            align: Vector2(tileSize * 1.3, tileSize),
          ),
        ],
      ),
    );

    /// 生命条
    setupBarLife(
      size: Vector2(tileSize * 1.5, tileSize / 5),
      barLifePosition: BarLifePorition.top,
      showLifeText: false,
      margin: 0,
      borderWidth: 2,
      borderColor: Colors.white.withOpacity(0.5),
      borderRadius: BorderRadius.circular(2),
      offset: Vector2(0, tileSize * 0.5),
    );
  }

  /// 渲染
  @override
  void render(Canvas canvas) {
    super.render(canvas);
  }

  @override
  void update(double dt) {
    if (!isDead) {
      enemyOrcCreate(dt);
      enemyBossCreate(dt);
      firstPlayerSay();
    }
    super.update(dt);
  }

  /// 碰撞触发
  @override
  bool onCollision(GameComponent component, bool active) {
    bool active = true;

    /// Orc 不发生碰撞
    if (component is Orc) {
      active = false;
    }

    /// Boss 不发生碰撞
    if (component is Boss) {
      active = false;
    }
    if (component is FlyingAttackObject) {
      active = false;
    }
    return active;
  }

  /// 操纵手柄操作控制
  @override
  void joystickAction(JoystickActionEvent event) {
    if (hasGameRef && gameRef.sceneBuilderStatus.isRunning) return;

    /// 死亡 || 锁住移动
    if (isDead || lockMove) return;

    controller.handleJoystickAction(event);
    super.joystickAction(event);
  }

  /// 操纵杆控制
  @override
  void joystickChangeDirectional(JoystickDirectionalEvent event) {
    if (hasGameRef && gameRef.sceneBuilderStatus.isRunning) return;

    /// 死亡 || 锁住移动
    if (isDead || lockMove) return;

    speed = maxSpeed * event.intensity;
    super.joystickChangeDirectional(event);
  }

  /// 受伤触发
  @override
  void receiveDamage(AttackFromEnum attacker, double damage, dynamic from) {
    if (hasController) {
      controller.handleReceiveDamage(damage);
    }
    super.receiveDamage(attacker, damage, from);
  }

  /// 死亡
  @override
  void die() {
    handleDie();
    super.die();
  }

  /// 受伤触发
  void handleReceiveDamage(double damage) {
    showDamage(
      damage,
      initVelocityTop: -2,
      config: TextStyle(color: Colors.white, fontSize: tileSize / 2),
    );
    // lockMove = true;
    /// 屏幕变红
    // gameRef.lighting
    //     ?.animateToColor(const Color.fromARGB(255, 26, 0, 0).withOpacity(0.7));
    // idle();
    // addDamageAnimation(() {
    //   lockMove = false;
    //   gameRef.lighting?.animateToColor(Colors.black.withOpacity(0.7));
    // });
  }

  /// 第一次游玩对话
  void firstPlayerSay() {
    if (!firstPlayer) {
      firstPlayer = true;
      gameRef.camera.moveToTargetAnimated(
        this,
        finish: () {
          TalkDialog.show(
            gameRef.context,
            [
              Say(
                text: [
                  const TextSpan(text: "你...好...陌...生...人..."),
                  const TextSpan(
                    text: "  怪物已经向你冲来！！！",
                    style: TextStyle(
                      color: Colors.red,
                    ),
                  ),
                ],
                person: CustomSpriteAnimationWidget(
                  animation: SpriteSheetPlayer.idleBottomRight,
                ),
                personSayDirection: PersonSayDirection.LEFT,
                speed: 100,
              ),
            ],
          );
        },
      );
    }
  }

  /// 死亡触发
  void handleDie() {
    Vector2 playerPosition =
        gameRef.player?.position ?? Vector2(position.x, position.y);
    gameRef.camera.moveToTargetAnimated(this, finish: () {});
    TalkDialog.show(
      gameRef.context,
      [
        Say(
          text: [
            const TextSpan(text: "恩... 好像失败了..."),
          ],
          person: CustomSpriteAnimationWidget(
            animation: SpriteSheetPlayer.getDamageTopRight(),
          ),
          personSayDirection: PersonSayDirection.LEFT,
          speed: 100,
        ),
      ],
    );
    animation?.playOnce(
      SpriteSheetPlayer.getDie(),
      onFinish: () {
        removeFromParent();
        gameRef.add(
          GameDecoration.withSprite(
            sprite: Sprite.load('$assetsPath/crypt.png'),
            position: playerPosition,
            size: Vector2.all(tileSize * 3.2),
          ),
        );
      },
      runToTheEnd: true,
    );
  }

  /// 敌对生物生成 Orc
  void enemyOrcCreate(double dt) {
    if (checkInterval('EnemyBossCreate', 1000, dt)) {
      debugPrint("怪物数量：${gameRef.enemies().length}");

      /// 限制数量
      if (gameRef.enemies().length >= 100) return;
      debugPrint('Orc 生成了');

      /// 生成
      gameRef.add(
        Orc(
          Vector2(
            maxMapSize + 500,
            Random().nextDouble() * 500,
          ),
        ),
      );
      gameRef.add(
        Orc(
          Vector2(
            -500,
            Random().nextDouble() * 500,
          ),
        ),
      );
      gameRef.add(
        Orc(
          Vector2(
            Random().nextDouble() * 500,
            maxMapSize + 500,
          ),
        ),
      );
      gameRef.add(
        Orc(
          Vector2(
            Random().nextDouble() * 500,
            -500,
          ),
        ),
      );
    }
  }

  /// 敌对生物生成 Boss
  void enemyBossCreate(double dt) {
    if (checkInterval('EnemyBossCreate', 1000, dt)) {
      debugPrint("怪物数量：${gameRef.enemies().length}");

      /// 限制数量
      if (gameRef.enemies().length >= 100) return;
      debugPrint('Boss 生成了');

      /// 生成
      gameRef.add(
        Boss(
          Vector2(
            maxMapSize + 1000,
            Random().nextDouble() * 1000,
          ),
        ),
      );
      gameRef.add(
        Boss(
          Vector2(
            -1000,
            Random().nextDouble() * 1000,
          ),
        ),
      );
    }
  }

  /// 远程攻击
  void actionAttackRange(double fireAngle) {
    simpleAttackRangeByAngle(
      animation: SpriteSheetFireBall.fireBallAttackRight(),
      animationDestroy: SpriteSheetFireBall.fireBallExplosion(),
      size: Vector2(tileSize * 2, tileSize * 2),
      angle: fireAngle + Random().nextDouble() * 0.3,
      withDecorationCollision: false,
      speed: maxSpeed * (tileSize / 10),
      damage: 50.0 + Random().nextInt(10),
      attackFrom: AttackFromEnum.PLAYER_OR_ALLY,
      marginFromOrigin: 30,
      collision: CollisionConfig(
        collisions: [
          CollisionArea.rectangle(
            size: Vector2(tileSize, tileSize),
            align: Vector2(tileSize, tileSize / 3),
          ),
        ],
      ),
      lightingConfig: LightingConfig(
        radius: tileSize * 0.9,
        blurBorder: tileSize / 2,
        color: Colors.deepOrangeAccent.withOpacity(0.4),
      ),
    );
  }

  /// 远程混乱攻击
  void actionAttackRangeShotguns(double fireAngle) {
    simpleAttackRangeByAngle(
      animation: SpriteSheetFireBall.fireBallAttackRight(),
      animationDestroy: SpriteSheetFireBall.fireBallExplosion(),
      size: Vector2(tileSize * 2, tileSize * 2),
      angle: fireAngle + Random().nextDouble() * 1000,
      withDecorationCollision: false,
      speed: maxSpeed * (tileSize / 10),
      damage: 50.0 + Random().nextInt(20),
      attackFrom: AttackFromEnum.PLAYER_OR_ALLY,
      marginFromOrigin: 35,
      collision: CollisionConfig(
        collisions: [
          CollisionArea.rectangle(
            size: Vector2(tileSize, tileSize),
            align: Vector2(tileSize, tileSize / 3),
          ),
        ],
      ),
      lightingConfig: LightingConfig(
        radius: tileSize * 0.9,
        blurBorder: tileSize / 2,
        color: Colors.deepOrangeAccent.withOpacity(0.4),
      ),
    );
  }

  /// 攻击动画
  void addAttackAnimation() {
    Future<SpriteAnimation> newAnimation;
    switch (lastDirection) {
      case Direction.left:
        newAnimation = SpriteSheetPlayer.getAttackBottomLeft();
      case Direction.right:
        newAnimation = SpriteSheetPlayer.getAttackBottomRight();
      case Direction.up:
        if (lastDirectionHorizontal == Direction.left) {
          newAnimation = SpriteSheetPlayer.getAttackTopLeft();
        } else {
          newAnimation = SpriteSheetPlayer.getAttackTopRight();
        }
      case Direction.down:
        if (lastDirectionHorizontal == Direction.left) {
          newAnimation = SpriteSheetPlayer.getAttackBottomLeft();
        } else {
          newAnimation = SpriteSheetPlayer.getAttackBottomRight();
        }
      case Direction.upLeft:
        newAnimation = SpriteSheetPlayer.getAttackTopLeft();
      case Direction.upRight:
        newAnimation = SpriteSheetPlayer.getAttackTopRight();
      case Direction.downLeft:
        newAnimation = SpriteSheetPlayer.getAttackBottomLeft();
      case Direction.downRight:
        newAnimation = SpriteSheetPlayer.getAttackBottomRight();
    }
    animation?.playOnce(newAnimation);
  }

  /// 受伤动画
  void addDamageAnimation(VoidCallback onFinish) {
    Future<SpriteAnimation> newAnimation;
    switch (lastDirection) {
      case Direction.left:
        newAnimation = SpriteSheetPlayer.getDamageBottomLeft();
      case Direction.right:
        newAnimation = SpriteSheetPlayer.getDamageBottomRight();
      case Direction.up:
        if (lastDirectionHorizontal == Direction.left) {
          newAnimation = SpriteSheetPlayer.getDamageTopLeft();
        } else {
          newAnimation = SpriteSheetPlayer.getDamageTopRight();
        }
      case Direction.down:
        if (lastDirectionHorizontal == Direction.left) {
          newAnimation = SpriteSheetPlayer.getDamageBottomLeft();
        } else {
          newAnimation = SpriteSheetPlayer.getDamageBottomRight();
        }
      case Direction.upLeft:
        newAnimation = SpriteSheetPlayer.getDamageTopLeft();
      case Direction.upRight:
        newAnimation = SpriteSheetPlayer.getDamageTopRight();
      case Direction.downLeft:
        newAnimation = SpriteSheetPlayer.getDamageBottomLeft();
      case Direction.downRight:
        newAnimation = SpriteSheetPlayer.getDamageBottomRight();
    }
    animation?.playOnce(
      newAnimation,
      runToTheEnd: true,
      onFinish: onFinish,
    );
  }
}
