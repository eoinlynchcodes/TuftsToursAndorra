console.log('It works');

$(document).ready(function (){
    $('.submit').click(function (event){
        event.preventDefault();
        console.log('Clicked button')

        var name = $('.name').val()
        var email = $('.email').val()
        var message = $('.message').val()
        // statusElm is statusElement
        var statusElm = $('.status')
        statusElm.empty()

        if(name.length >= 3){
            // .append adds html.
            statusElm.append('<div>Please enter a name.</div>')
        }

        if(email.length >= 5 && email.includes('@') && email.includes('.')){
            statusElm.append('<div>Email is valid</div>')
            console.log('email is valid');
        } else {
            statusElm.append('<div>Email is not valid</div>')
        }

        if(message.length <= 20){
            statusElm.append('<div>Message is too short</div>')
        } else {
            console.log('Message is good')
        }
    })
})