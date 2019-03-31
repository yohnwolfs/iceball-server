const ScoreConfig = {
    bulletExplosions: 1,
    balls: 8,
    winBalls: 10
}
interface ScoreData {
    id: string;
    name: string;
    score: number;
    balls: number;
    bulletExplosions: number;
}

/**
 * 分数管理
 */
export default class ScoreHelper {
    public _scoreList: Array<ScoreData>;
    
    constructor(id1: string, name1: string, id2: string, name2: string) {
        this._scoreList = new Array<ScoreData>(2);
        this._scoreList[0] = {
            id: '',
            name: '',
            score: 0,
            balls: 0,
            bulletExplosions: 0
        };
        this._scoreList[1] = {
            id: '',
            name: '',
            score: 0,
            balls: 0,
            bulletExplosions: 0
        };
        this._scoreList[0].id = id1;
        this._scoreList[0].name = name1;
        this._scoreList[1].id = id2;
        this._scoreList[1].name = name2;
    }

    // 子弹爆炸得分
    public causeExplosion(id: string) {
        for(let i = 0, l = this._scoreList.length; i < l; i++) {
            if(this._scoreList[i].id === id) {
                this._scoreList[i].bulletExplosions += 1;
                this._scoreList[i].score += ScoreConfig.bulletExplosions;
            }
        }
    }

    // 改变得分
    public scorein(id: string, scoreType: string) {
        for(let i = 0, l = this._scoreList.length; i < l; i++) {
            if(this._scoreList[i].id === id) {
                switch(scoreType) {
                    case 'bulletExplosion': {
                        this._scoreList[i].bulletExplosions += 1;
                        this._scoreList[i].score += ScoreConfig.bulletExplosions;
                        break;
                    }
                    case 'ballin': {
                        this._scoreList[i].balls += 1;
                        this._scoreList[i].score += ScoreConfig.balls;
                        break;
                    }
                }
            }
        }
    }

    // 检查玩家进球后是否达到胜利条件
    public checkWin(id: string) {
        for(let i = 0, l = this._scoreList.length; i < l; i++) {
            if(this._scoreList[i].id === id) {
                if(this._scoreList[i].balls === ScoreConfig.winBalls) return true;
            }
        }
        return false;
    }

    // 进球得分
    public ballIn(id: string) {
        for(let i = 0, l = this._scoreList.length; i < l; i++) {
            if(this._scoreList[i].id === id) {
                this._scoreList[i].balls += 1;
                this._scoreList[i].score += ScoreConfig.balls;

                if(this._scoreList[i].balls === ScoreConfig.winBalls) {
                    return true;
                }
            }
        }
        return false;
    }

    // 返回最终分数
    public getScore(uid?: string): any{

        if(uid) {
            for(let i = 0; i < this._scoreList.length; i++) {
                if(this._scoreList[i].id === uid) {
                    return this._scoreList[i];
                }
            }
        }
        else return this._scoreList;
    }
}