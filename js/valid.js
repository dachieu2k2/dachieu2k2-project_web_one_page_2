function valid(formGroup) {
    var elementInput = document.querySelector(formGroup);
    var elementInputParent = elementInput.parentElement;
    var messageInput = elementInputParent.querySelector('.form-message');
    // console.log(messageInput);
    var aElementInput = elementInput.getAttribute('rules');
    var ArrElementInput = aElementInput.split('|');

    
    ArrElementInput.forEach(element => {
        if(element === 'required'){
            elementInput.onblur = function(e){
                // console.log(isRequired(e.target.value));
                if(isRequired(e.target.value)!== undefined){
                    elementInput.classList.add('form-error');
                    messageInput.innerHTML = 'nhap de';
                }else{
                    elementInput.classList.remove('form-error');
                    messageInput.innerHTML = '';
                }
            }
            elementInput.oninput = function(e){
                elementInput.classList.remove('form-error');
                messageInput.innerHTML = '';
                // console.log(e.target.value);
            }
        }
        if(element === 'email'){
            elementInput.onblur = function(e){
                // console.log(isEmail(e.target.value));
                if(isEmail(e.target.value) !== undefined){
                    elementInput.classList.add('form-error');
                    messageInput.innerHTML = 'day khong phai email';
                }else{
                    elementInput.classList.remove('form-error');
                    messageInput.innerHTML = '';
                }
            }
            elementInput.oninput = function(e){
                elementInput.classList.remove('form-error');
                messageInput.innerHTML = '';
            }
        }
    });
     // lay du lieu
    // console.log(elementInputs);
}
function isRequired(value){
    if(value === ''){
        return "vui long nhap";
    }
    return undefined;
}
function isEmail(value){
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regex.test(value) === false){
        return "vui long nhap";
    }
    return undefined;
}

function getData (input , textarea){
    var check =0;
    var dataCucManh = [];
    var data ={};
    inputsValue = document.querySelectorAll(input);

    textareaValue = document.querySelector(textarea);
    //input
    inputsValue.forEach((element) => {
        
        var elementInputParent = element.parentElement;
        var messageInput = elementInputParent.querySelector('.form-message');
        var name = element.name;
        var value = element.value;
        if(value !== ''){
            data = {
                [name]:value
                // name:name,
                // value:value
            }
            dataCucManh.push(data);
            // console.log(check);
            check ++; 
        }else{
            element.classList.add('form-error');
            messageInput.innerHTML = 'vui long dien day du thong tin';
        }
        
        // console.log(data);
    })

    //textarea 
    var nameText = textareaValue.name;
    var valueText = textareaValue.value;
    var dataText = {
        [nameText]:valueText
    }
    dataCucManh.push(dataText);
    if(check === 3){
        //call api dataCucManh
        // console.log(dataCucManh);
    }else{
        console.log('coloi');
    }

}