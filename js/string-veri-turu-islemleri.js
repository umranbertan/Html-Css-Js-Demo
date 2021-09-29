
let email= "hakanyalcinkaya@gmail.com"
let firstname="hakan"
let lastName="YALCINKAYA"

// string karakter sayısı -->
console.log(email.length)


//İlk karakteri bulmak
console.log(firstname[4])
console.log(firstname.charAt(4))

//buyuk harf
firstname=firstname.toUpperCase()
console.log(firstname)

//- kucuk harf
firstname=firstname.toLowerCase()
console.log(firstname)

//String içinde istediğimiz bilgiyi aramak ve yerini bulmak-search
console.log(email.search("@"))
console.log(email[15])
console.log(email.search("fgm")) // olmayan birşey aratırsan -1 alırsın.

//belli bir yere kadar al ->slice(domain bilgisi)
let DOMAIN =email.slice(email.search("@") +1)
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0, DOMAIN.indexOf('.'))
)

//bilgiyi değiştir. -->replace
email=email.replace('gmail.com', 'kodluyoruz.org')
console.log(email)

//İstediğim bilgi var mı--includes 
console.log(email.includes('djhdjhd'))
console.log(email.includes('@'))

//İstediğim bilgi ile başladı mı bitt mi--> startsWidth-endsWidth
console.log(
    email.endsWith('kodluyoruz.org')

)

//İlk harflerini büyük yapmak
let fullName = `${firstname[0].toUpperCase()}${firstname.slice(1).toLowerCase()} 
${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`

console.log(fullName)
