var quotes=[
    'Get busy living or get busy dying',
    'Life is what happens when you are busy making other plans',
    'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself',
    'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.',
    'Great minds discuss ideas; average minds discuss events; small minds discuss people.',
    'A successful man is one who can lay a firm foundation with the bricks others have thrown at him',
    'If you aren’t willing to keep looking for light in the darkest of places without stopping even when it seems impossible, you will never succeed.',
    'You stand strong, keep pushing yourself against all rational limits, and never give up.',
    'Dont let fear keep you quiet.',
]
function newQuote(){
    var randomNumber=Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
    
}