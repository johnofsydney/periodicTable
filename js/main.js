console.log("conected");

$(document).ready( function () {
  console.log("ready");

  $('.noble-gas').on('click', function () {
    $('.info').html('<p>The noble gases (historically also the inert gases) make up a group of chemical elements with similar properties; under standard conditions, they are all odorless, colorless, monatomic gases with very low chemical reactivity.</p><p>Noble gases are typically highly unreactive except when under particular extreme conditions.</p>')
    $('.info').removeClass('noble-gas non-metal poor-metal alkaline-earth alkali-metal transition-metal')
    $('.info').addClass('noble-gas')
  })

  $('.non-metal').on('click', function () {
    $('.info').html('<p>In chemistry, a nonmetal (or non-metal) is a chemical element that mostly lacks metallic attributes.</p><p>Physically, nonmetals tend to be highly volatile (easily vaporized), have low elasticity, and are good insulators of heat and electricity; chemically, they tend to have high ionization energy and electronegativity values, and gain or share electrons when they react with other elements or compounds.</p>')
    $('.info').removeClass('noble-gas non-metal poor-metal alkaline-earth alkali-metal transition-metal')
    $('.info').addClass('non-metal')
  })


  $('.poor-metal').on('click', function () {
    $('.info').html('<p>Poor metals melting and boiling points are generally lower than normal metals. Their electronegativity and conductivity is also higher, but their texture is softer than usual metals. These elements are distinguished from metalloids by their high boiling points compared to that row of elements in the periodic table.</p>')
    $('.info').removeClass('noble-gas non-metal poor-metal alkaline-earth alkali-metal transition-metal')
    $('.info').addClass('poor-metal')
  })


  $('.alkaline-earth').on('click', function () {
    $('.info').html('<p>The alkaline earth metals are all shiny, silvery-white, somewhat reactive metals at standard temperature and pressure. Structurally, they have in common an outer s- electron shell which is full.</p><p>All the discovered alkaline earth metals occur in nature. Experiments have been conducted to attempt the synthesis of element 120, the next potential member of the group, but they have all met with failure.</p>')
    $('.info').removeClass('noble-gas non-metal poor-metal alkaline-earth alkali-metal transition-metal')
    $('.info').addClass('alkaline-earth')
  })

  $('.alkali-metal').on('click', function () {
    $('.info').html('<p>The alkali metals are all shiny, soft, highly reactive metals. They can all be cut easily with a knife due to their softness, exposing a shiny surface that tarnishes rapidly in air due to oxidation by atmospheric moisture and oxygen.</p><p>Because of their high reactivity, they must be stored under oil to prevent reaction with air, and are found naturally only in salts and never as the free elements. </p>')
    $('.info').removeClass('noble-gas non-metal poor-metal alkaline-earth alkali-metal transition-metal')
    $('.info').addClass('alkali-metal')
  })

  $('.transition-metal').on('click', function () {
    $('.info').html('<p>In general, transition metals possess a high density and high melting points and boiling points.</p><p>Transition metal compounds are paramagnetic when they have one or more unpaired d electrons</p>')
    $('.info').removeClass('noble-gas non-metal poor-metal alkaline-earth alkali-metal transition-metal')
    $('.info').addClass('transition-metal')
  })

  $('.info').on('click', function () {

    setTimeout(function () {
      $('.info').addClass('bounceOut')}, 500)
    setTimeout(function(){
      $('.info').html('<p>Example of some layout techniques.</p><p>HTML, CSS Grid, CSS animations (from <a href="https://daneden.github.io/animate.css/">Dan Eden</a>), Google Fonts, transition effects, jQuery</p>')
      $('.info').removeClass('noble-gas non-metal poor-metal alkaline-earth alkali-metal transition-metal')
      $('.info').removeClass('bounceOut')
      $('.info').addClass('bounceIn')
    }, 1500);


  })

})
