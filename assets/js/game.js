class Obstacle {
    TOP_BOUNDERIES = 0;
    BOTTOM_BOUNDERIES = 0;
    LEFT_BOUNDERIES = 0;
    RIGHT_BOUNDERIES = 0;

    constructor(obstacle_id) {
        element = document.getElementById(obstacle_id);
        var rect = element.getBoundingClientRect();
        TOP_BOUNDERIES = rect.top;
        BOTTOM_BOUNDERIES = rect.bottom;
        LEFT_BOUNDERIES = rect.left;
        RIGHT_BOUNDERIES = rect.right;
    }
}
//put the obtacles in an arrey
//all obscatles need to have 4 bounderies
//
const keyMap= {
    TOP: 38,
    RIGHT: 39,
    BOTTOM: 40,
    LEFT: 37,
}

const PLAYER_MOVE_STEP = 20;
const MAP_WIDTH = 1000;
const MAP_HEIGHT = 500;
const PLAYER_WIDTH = 20;
const PLAYER_HEIGHT = 20;

class Player {
    element = document.querySelector('.player');
    x= 0;
    y= 0;
    
    //when new Player is called, `this` is created
    constructor() {
        //console.log(this.element)
        this._initMovement();
    }
    
    _initMovement() {
        // console.log(this);
        document.addEventListener('keydown', this._hangleMovement.bind(this));
    }
    
    _hangleMovement(event) {
        switch(event.keyCode) {
            case keyMap.TOP: {
                this.moveTop();
                break;
            }
            case keyMap.RIGHT: {
                this.moveRight();                
                break;
            }
            case keyMap.BOTTOM: {
                this.moveBottom();
                break;
            }
            case keyMap.LEFT: {
                this.moveLeft();
                break;
            }
        }
    }
    
    moveTop() {
        const newY = this.y - PLAYER_MOVE_STEP;
        
        if(this._isMoveInBounderies(this.x, newY)) {
            this.y = newY;
            this._updatePosition();            
        }
    }
    moveRight() {
        const newX = this.x + PLAYER_MOVE_STEP;
        if(this._isMoveInBounderies(newX, this.y)) {
            this.x = newX;
            this._updatePosition();            
        }
    }
    moveBottom() {
        const newY = this.y + PLAYER_MOVE_STEP;
        if(this._isMoveInBounderies(this.x, newY)) {
            this.y = newY;
            this._updatePosition();            
        }
    }
    moveLeft() {
        const newX = this.x - PLAYER_MOVE_STEP;
        if(this._isMoveInBounderies(newX, this.y)) {
            this.x = newX;
            this._updatePosition();
        }
    }
    
    _updatePosition() {
        this.element.style.top = `${this.y}px`;
        this.element.style.left = `${this.x}px`;
        
    }
    
    _isMoveInBounderies(x, y) {
        
        if (y < 0) {
            return false;
        }
        
        if(x < 0){
            return false;
        }
        if (x > MAP_WIDTH - PLAYER_WIDTH) {
            return false;
        }
        
        if (y > MAP_HEIGHT - PLAYER_HEIGHT) {
            return false;
        }
        
        return true;
    }
}

const p1 = new Player();

const obstacles = new Array();

elementTop = document.querySelectorAll('.obstacleTop');
console.log(elementTop);

// for (i= 1; i < 7;  i++){
//     console.log("obstacle" + i);
//     obstacles[i] = new Obstacle("#obstacle" + i);
// }


// const pl = {
    //     key: 'player',
    //     callMe: function() {
        //         console.log(this);
        //         return this;
        //     },
        // };
        
        // pl.callMe(); //pl -> this
        
// const doc = {
// key: 'document'
// };
// // with bind we can hardcode the execution context(`this`)
// doc.callMe = pl.callMe.bind(pl);

// doc.callMe();