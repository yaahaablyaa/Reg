const forms = document.forms[0]
const aviableSim = {
    name: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    surname: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    email:  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
    userInfo: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    css:/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    js: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    favCar: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    html: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    age: /^100|[1-9]?\d$/
}

function validate(field, regex) {
    if (regex.test(field.value)) {
        field.classList.add('valid')
        field.classList.remove('invalid')
        if(field.nextSibling.nextSibling) {
            field.nextSibling.nextSibling.innerHTML = ""
        }
    } else {
        field.classList.add('invalid')
        field.classList.remove('valid')
    }
}

let inputs = forms.querySelectorAll('input')
let button = forms.querySelector('button')
inputs.forEach(input => {
    input.onkeyup = () => {
        validate(input, aviableSim[input.name])
    }
});


let requireFields = document.querySelectorAll('.blue')
let allFields = document.querySelector('#all')
let needFields = document.querySelector('#need')
let success = document.querySelector('#success')
let error = document.querySelector('#error')


allFields.innerHTML = inputs.length
needFields.innerHTML = requireFields.length

let isLoading = false
let img = document.querySelectorAll('img')
let bt = document.querySelector('button')

forms.onsubmit = (event) => {
    event.preventDefault()
    let arr = []
    inputs.forEach(inp => {
        if(inp.classList.contains('invalid') || inp.value.length == 0) {
           if(inp.nextSibling.nextSibling) {
              arr.push('invalid')
              inp.classList.add('invalid')
              setTimeout(() => {
                    inp.classList.remove('invalid')
                }, 1000);
                inp.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML = `Please enter ${inp.previousSibling.previousSibling.innerHTML} `
                inp.nextSibling.nextSibling.nextSibling.nextSibling.style.color = "red"
                bt.className = 'bt'
                img.forEach(element => {
                  element.style.opacity = '1'
                })
                setTimeout(() => {
                  inp.nextSibling.nextSibling.nextSibling.nextSibling.style.color = "black"
                  inp.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML = "Need to fill"
                  bt.className = ''
                  img.forEach(element => {
                     element.style.opacity = '0'
                   });
                }, 1000);
            }
        }
    })
}
