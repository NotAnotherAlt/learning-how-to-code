function gameLoop() {
    updateDeltaTime();
    UpdateFrameTime();
    if (Mode !== prevMode){
        if (Mode == 0){
            StartPlay();
        }
        prevMode = Mode;
    }
}




let $X;
let $Y;
let $ZOOM;
let Mode;
let BG_COLOR;
let GROUND_COLOR;
let BLOCK_PX;
let MAX_FRAME_DT;
let z_SPEEDHACK;
let frameDT;
let CAM_PLAY_Y;
let CAM_MIN_X;
let deltaTime;
let previousTime;
let prevMode;

function StartPlay(){

}



function reset() {
    $X = 100;
    $Y = 0;
    $ZOOM = 0.65;
    Mode = 1;
    BG_COLOR = "#6082d1";
    GROUND_COLOR = "#000000";
    BLOCK_PX = 48;
    MAX_FRAME_DT = 0.1;
    z_SPEEDHACK = 1;
    frameDT = 0;
    CAM_PLAY_Y = 150;
    CAM_MIN_X = 246;
    deltaTime = 0;
    previousTime = null;
    prevMode = Mode;
}

function updateDeltaTime() {
    const now = performance.now();
    if (previousTime === null) {
        deltaTime = 1 / 60;
    } else {
        deltaTime = (now - previousTime) / 1000;
    }
    previousTime = now;
}


function ClampCamera() {
    if ($ZOOM < 0.5) {
        $ZOOM = 0.5;
    }
    if ($ZOOM > 1) {
        $ZOOM = 1;
    }
    if ($Y < CAM_PLAY_Y) {
        $Y = CAM_PLAY_Y;
    }
    if (Mode !== 0) {
        if ($X < CAM_MIN_X / $ZOOM) {
            $X = CAM_MIN_X / $ZOOM;
        }
    }
}

function UpdateFrameTime(){
    frameDT = deltaTime
    if (frameDT > MAX_FRAME_DT){
        frameDT = MAX_FRAME_DT
    }
    frameDT = frameDT * z_SPEEDHACK
}








































































































































































































































































































































































































































































































//lmao bottom of file
reset();

