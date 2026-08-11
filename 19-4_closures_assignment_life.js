/*  Problem-6: Assignment Life (closures)
    Real-life scenario: On Programming Hero, every student gets 3 LIVES. 
    Each time you submit an assignment LATE for 60 marks, you lose 1 life.
    when lives hit 0, you can't submit Late assignment for 60 marks. You
    want ONE function that can create a fresh, independent life-counter.

    createLifeCounter() - returns a function. 
    Every time you call that returened function (on a Late submission), it decreases a PRIVSTE
    lives count by 1 and returns the remaining lives. 
    There is NO gloval variable storing lives - it lives only inside the closure.

*/
 const createLifeCounter = () => {
    let lives = 3;
    
    return ()=>{
        // console.log(lives);
        if(lives > 0){
            lives--;
        }
        return lives;
    }

 }
 const rahimLifeUpdated = createLifeCounter()
 const karimLifeUpdated = createLifeCounter()
 const akashLifeUpdated = createLifeCounter()
 const jhonLifeUpdated = createLifeCounter()

 console.log('Rahim LIfe Update => ',rahimLifeUpdated());
 console.log('Rahim LIfe Update => ',rahimLifeUpdated());

 
 console.log('Akash Life Update: ', akashLifeUpdated());
 console.log('Akash Life Update: ', akashLifeUpdated());
 
 console.log('Jhon life Update ->', jhonLifeUpdated());
 
 console.log('Rahim LIfe Update => ',rahimLifeUpdated());

