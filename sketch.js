
const BALL_NUM = 7;
let x = [];
let y = [];
let speed = [];

function setup() {
    createCanvas(400, 400);
    colorMode(HSB, 360, 100, 100);
    for (let i = 0; i < BALL_NUM; i++) {
        x[i] = random(width);
        y[i] = random(height);
        speed[i] = random(1, 5); // 速度をランダムに設定
    }
}

function draw() {
    background(0,0,0,20);
    for (let i = 0; i < BALL_NUM; i++) {
        x[i] += speed[i];
        if (x[i] > width) {
            x[i] = 0;
        }
        // 虹色: HSBの色相をずらす
        fill((i * 360 / BALL_NUM), 80, 100);
        circle(x[i], y[i], 60);
    }
}
