$(document).ready(function() {
    let charHp = [100, 120, 140, 160, 180, 200]
    let attackPower = 0
    let counterAttackRange = [5, 10, 15, 20]
    let isCharChosen = true
    let isEnemyChosen = true
    let enemyLifePoints
    let counterAttack
    let lifePoints
    let initialAttackPower
    $('.playerStatus').hide()
    $('.enemyStatus').hide()
  
    $('.charToChoose').on('click', function() {
      if (isCharChosen) {
        $(this)
          .detach()
          .appendTo('#chosenOne')
          .removeClass('charToChoose')
          .addClass('chosenOne')
        let rand = Math.floor(Math.random() * 6)
        lifePoints = charHp[rand]
        initialAttackPower = Math.ceil(Math.random() * 10) + 5
        attackPower = initialAttackPower
        $('.life-points').html(lifePoints)
        $('.attack').html(attackPower)
  
        $('.playerStatus').show()
        $('.choice-1').hide()
        $('.charToChoose')
          .detach()
          .appendTo('.enemies')
          .removeClass('charToChoose')
          .addClass('enemyChar')
  
        isCharChosen = false
      }
  
      $('.enemyChar').on('click', function() {
        if (isEnemyChosen) {
          $('.enemyStatus').show()
          $(this)
            .detach()
            .appendTo('.defender')
            .removeClass('enemyChar')
            .addClass('enemyChosen')
  
          let enRand = Math.floor(Math.random() * 6)
          let moreRand = Math.floor(Math.random() * 4)
  
          enemyLifePoints = charHp[enRand]
          counterAttack = counterAttackRange[moreRand]
  
          $('.enemy-life').html(enemyLifePoints)
          $('.counter').html(counterAttack)
          isEnemyChosen = false
        }
      })
    })
  
    $('#attacking').on('click', function() {
      enemyLifePoints -= attackPower
      attackPower += initialAttackPower
      lifePoints -= counterAttack
  
      $('.attack').html(attackPower)
      $('.enemy-life').html(enemyLifePoints)
      $('.life-points').html(lifePoints)
  
      if (lifePoints < 0) {
        alert('You Lost!! Refresh To Restard The Game')
      }
  
      if (enemyLifePoints <= 0) {
        $('.enemyChosen').detach()
        isEnemyChosen = true
        enemyLifePoints = $('enemy-life')
      }
    })
  })

