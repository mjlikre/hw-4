$(document).ready(function() {
    let charHp = [100,120,140,160,180,200];
    let attackPower = 0; 
    let counterAttackRange = [5,10,15,20];
    let counterAttack = 0;
    let isCharChosen = true;
    let isEnemyChosen = true;
    $('.playerStatus').hide();
    $('.enemyStatus').hide();
    

    


        $('.charToChoose').on('click', function(){
            if (isCharChosen){
                $(this).detach().appendTo('#chosenOne').removeClass('charToChoose').addClass("chosenOne");
                let rand = Math.floor(Math.random()*6);
                let lifePoints = charHp[rand];
                var initialAttackPower= (Math.ceil(Math.random()*10)+5);
                attackPower = initialAttackPower;
                $(".life-points").html(lifePoints);
                $('.attack').html(attackPower);

                $('.playerStatus').show();
                $(".choice-1").hide();
                $(".charToChoose").detach().appendTo('.enemies').removeClass('charToChoose').addClass('enemyChar');
                
                isCharChosen = false;
                
                $('.enemyChar').on('click', function(){
                    if (isEnemyChosen){
                        $('.enemyStatus').show();
                        $(this).detach().appendTo(".defender").removeClass('enemyChar').addClass('enemyChosen');
                        let enRand = Math.floor(Math.random()*6);
                        let enemyLifePoints = charHp[enRand];
                        $('.enemy-life').html(enemyLifePoints);
                        let moreRand = Math.floor(Math.random()*4);
                        let counterAttack = counterAttackRange[moreRand];
                        $('.counter').html(counterAttack);
                        isEnemyChosen = false; 
                        $('#attacking').on('click', function(){
                            enemyLifePoints-=attackPower;
                            $('.enemy-life').html(enemyLifePoints);
                            lifePoints -= counterAttack;
                            $(".life-points").html(lifePoints);

                            if (lifePoints > 0){
                                
                                attackPower += initialAttackPower;
                                $('.attack').html(attackPower);

                            }
                            else{
                                alert("You Lost!! Refresh To Restard The Game")
                            } 
                            
                            if (enemyLifePoints<=0){
                                $('.enemyChosen').detach();
                                isEnemyChosen = true;
                                enemyLifePoints = $('enemy-life');
                            }

                             
                        });
                        
        
                    }
                });

                
                

                
                
                
            }
        });

        



    
    

    
});


