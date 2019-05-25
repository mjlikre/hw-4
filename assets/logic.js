$(document).ready(function() {
    var charHp = [100,120,140,160,180,200];
    var attackPower = 0; 
    var counterAttack = 0;
    var isCharChosen = true;
    var isEnemyChosen = true;

        $('.charToChoose').on('click', function(){
            if (isCharChosen){
                $(this).detach().appendTo('#chosenOne').removeClass('charToChoose').addClass("chosenOne");
                $(".choice-1").hide();
                $(".charToChoose").detach().appendTo('.enemies').removeClass('charToChoose').addClass('enemyChar');
                var rand = Math.floor(Math.random()*6);
                var lifePoints = charHp[rand];
                $("#life-points").html(lifePoints);
                isCharChosen = false;
                
                $('.enemyChar').on('click', function(){
                    if (isEnemyChosen){
                        $(this).detach().appendTo(".defender").removeClass('enemyChar').addClass('enemyChosen');
                        var enRand = Math.floor(Math.random()*6);
                        var enemyLifePoints = charHp[enRand];
                        $('#life-points').html(enemyLifePoints);
                        isEnemyChosen = false; 
                    }
                });

                
                
            }
        });

        



    
    

    
});


