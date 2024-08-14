const DOMStrings = {
    send : '.sendBrand',
    brandStory : 'moreInfo',
    scents :'scents',
    emailBrand :'.emailBrand',
    messageAlert: '.dialog-overlay',
    messageAlertWarning: '.dialog-box-msg',
    closeMessageAlert: '.close-btn',
    discountEmail: '.emailvalue1',
    discountPhone: '.phonevalue1',
    discountButton: '.signup-button1',
 }

const perfume = [
    {
        name: 'Chrome accusamus One',
        img: 'images/male1.jpg',
        brandName: 'Gucci',
        productDescription: 'Elegant floral notes blend with warm amber and musk for a timeless, captivating fragrance',
        productSize: '120ML',
        cost: '₦5,000',
        gender: 'male'
    },
    {
        name: 'Chrome accusamus Two',
        img: 'images/male2.jpg',
        brandName: 'Gucci',
        productDescription: 'Elegant floral notes blend with warm amber and musk for a timeless, captivating fragrance',
        productSize: '100ML',
        cost: '₦5,000',
        gender: 'male'

    },
    {
        name: 'Chrome accusamus Three',
        img: 'images/male3.jpg',
        brandName: 'Gucci',
        productDescription: 'Elegant floral notes blend with warm amber and musk for a timeless, captivating fragrance',
        productSize: '120ML',
        cost: '₦5,000',
        gender: 'male'
    },
    {
        name: 'Chrome accusamus Four',
        img: 'images/male4.jpg',
        brandName: 'Gucci',
        productDescription: 'Elegant floral notes blend with warm amber and musk for a timeless, captivating fragrance',
        productSize: '120ML',
        cost: '₦7,000',
        gender: 'male'

    },
]


const perfumeforWomen = [
    {
        name: 'Chrome accusamus Five',
        img: 'images/male1.jpg',
        brandName: 'Gucci',
        productDescription: 'Elegant floral notes blend with warm amber and musk for a timeless, captivating fragrance',
        productSize: '120ML',
        cost: '₦5,000',
        gender: 'female'
    },
    {
        name: 'Chrome accusamus Six',
        img: 'images/male2.jpg',
        brandName: 'Gucci',
        productDescription: 'Elegant floral notes blend with warm amber and musk for a timeless, captivating fragrance',
        productSize: '100ML',
        cost: '₦5,000',
        gender: 'female'
    },
    {
        name: 'Chrome accusamus Seven',
        img: 'images/male3.jpg',
        brandName: 'Gucci',
        productDescription: 'Elegant floral notes blend with warm amber and musk for a timeless, captivating fragrance',
        productSize: '120ML',
        cost: '₦5,000',
        gender: 'female'
    },
    {
        name: 'Chrome accusamus Eight',
        img: 'images/male4.jpg',
        brandName: 'Gucci',
        productDescription: 'Elegant floral notes blend with warm amber and musk for a timeless, captivating fragrance',
        productSize: '120ML',
        cost: '₦7,000',
        gender: 'female'
    }
]


const perfumeBoard = document.querySelector('.men-fragrance')
const perfumeSecondBoard = document.querySelector('.women-fragrance')

const createMenPerfumes = function(){
    for(let i = 0; i < perfume.length; i++){
        const clickPerfume = document.createElement('a')
        clickPerfume.setAttribute('href', '#')

        const perfumeBlock = document.createElement('div')
        perfumeBlock.setAttribute('class', `fragrance-1 male1 maleBrand-${i}`)
        perfumeBlock.setAttribute('data-index', i)

        const perfumeImage = document.createElement('img')
        perfumeImage.setAttribute('src', perfume[i].img)
        perfumeImage.setAttribute('class', 'fragrance-image')

        const perfumeName = document.createElement('h4')
        perfumeName.innerHTML =`${perfume[i].name}`


        perfumeBlock.appendChild(perfumeImage)
        perfumeBlock.appendChild(perfumeName)
        clickPerfume.appendChild(perfumeBlock)
        perfumeBoard.appendChild(clickPerfume)
    }
}

const createWomenPerfumes = function(){
    for(let i = 0; i < perfumeforWomen.length; i++){
        const clickPerfume = document.createElement('a')
        clickPerfume.setAttribute('href', '#')

        const perfumeBlock = document.createElement('div')
        perfumeBlock.setAttribute('class', `fragrance-1 female1 femalebrand-${i}`)
        perfumeBlock.setAttribute('data-index', i)


        const perfumeImage = document.createElement('img')
        perfumeImage.setAttribute('src', perfumeforWomen[i].img)
        perfumeImage.setAttribute('class', 'fragrance-image')

        const perfumeName = document.createElement('h4')
        perfumeName.innerHTML =`${perfumeforWomen[i].name}`


        perfumeBlock.appendChild(perfumeImage)
        perfumeBlock.appendChild(perfumeName)
        clickPerfume.appendChild(perfumeBlock)
        perfumeSecondBoard.appendChild(clickPerfume)
    }
}

createMenPerfumes()
createWomenPerfumes()


//Click a Product and Display

const malePerfume = document.querySelectorAll('.male1')

const femalePerfume = document.querySelectorAll('.female1')


function productInfo(dataSet, index){

    const product = dataSet[index]

    document.getElementById('dialog-product-name').innerText = product.name
    document.getElementById('dialog-perfume-image').src = product.img
    document.getElementById('dialog-brand-name').innerText = product.brandName
    document.getElementById('dialog-product-description').innerText = product.productDescription
    document.getElementById('dialog-product-size').innerText = product.productSize
    document.getElementById('dialog-product-cost').innerText = product.cost
    document.getElementById('product-dialog').style.visibility = 'visible'
    document.getElementById('Whatsapp-order').setAttribute('href', `https://wa.me/+2348036317828?text=Hello%2C%20I%20would%20like%20to%20order%20${product.name}.`)


   console.log( document.getElementById('dialog-product-name').innerText = product.name)
}


malePerfume.forEach((db, index)=>{
    db.addEventListener('click', (e)=>{
        e.preventDefault()
        productInfo(perfume,index)
        
    })
})


femalePerfume.forEach((db, index)=>{
    db.addEventListener('click', (e)=>{
        e.preventDefault()
        productInfo(perfumeforWomen,index)
    })
})

document.getElementById('dialog-close').addEventListener('click', ()=>{
    document.getElementById('product-dialog').style.visibility = 'hidden'
})




//Sign up and discount form
////////////////////////
//Open dialogue Box
function openBox(){
    document.querySelector(DOMStrings.messageAlert).style.visibility = 'visible'

}
//close Dialogue box and clear fields
document.querySelector(DOMStrings.closeMessageAlert).addEventListener('click', closeBox)

function closeBox(){
    document.querySelector(DOMStrings.messageAlert).style.visibility = 'hidden'
}


document.querySelector(DOMStrings.discountButton).addEventListener('click', sendDiscountRequest)


function sendDiscountRequest(e){
    e.preventDefault()
    let signupEmail = document.querySelector(DOMStrings.discountEmail).value
    let signupPhone = document.querySelector(DOMStrings.discountPhone).value

    let getPhoneNumber = validateNigerianPhoneNumber(signupPhone)
    let getSignUpEmail = validateEmail(signupEmail)

    if(getPhoneNumber === false || getSignUpEmail === false){
        document.querySelector(DOMStrings.messageAlertWarning).innerHTML = 'Please enter correct email or phone number!'
        openBox()
    }else{
        document.querySelector(DOMStrings.messageAlertWarning).innerHTML = 'Signed Up Succesfully!'
        openBox()
        
        document.querySelector(DOMStrings.discountEmail).value = ''
        document.querySelector(DOMStrings.discountPhone).value = ''
        
    }

}



const nigeriaPhoneRegex = /^(?:\+234|0)?[789]\d{9}$/;

function validateNigerianPhoneNumber(phoneNumber) {
    return nigeriaPhoneRegex.test(phoneNumber);
}

// Email validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail(email) { 
    return emailRegex.test(email);
}


