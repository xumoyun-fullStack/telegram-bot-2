module.exports = class Texts{
    static reqCity(lang) {
        if(lang == "uz"){
            return {
                text: `Shaharni tanlang`,
                cities: [
                    "Toshkent",
                    "Urganch"
                ]
            };
        }else if(lang == "ru"){
            return {
                text: `Выберите город`,
                cities: [
                    "Ташкент",
                    "Ургенч"
                ]
            };
        } else if(lang == "en"){
            return {
                text: `Choose city`,
                cities: [
                    "Tashkent",
                    "Urgench"
                ]
            }
        }
    }

    static reqPhone(lang){
        if(lang == "uz"){
            return `Ro'yxatga olish uchun telefon raqamingizni kiriting\n masalan +99890xxxxxxx`
        }else if (lang == "en"){
            return `Enter your phone number to register\n for example + 99890xxxxxxx`
        }else if (lang == "ru"){
            return `Введите свой номер телефона для регистрации\n например + 99890xxxxxxx`
        }
    }

    static reqCode(lang){
        if(lang == "uz"){
            return {
                text: `Telefoningizga tasdiqlash kodi yuborildi, iltimos shu kodni kiriting`,
                btn: "Qayta kode so`rash"
            }
        }else if (lang == "ru"){
            return {
                text: `На ваш телефон отправлен код подтверждения, введите этот код`,
                btn: "Запросить код еще раз"
            }
        }else if (lang == "en"){
            return {
                text: `A confirmation code has been sent to your phone, please enter this code`,
                btn: 'Request code again'
            }
        }
    }

    static incorrectCode(lang){
        if(lang == "uz"){
            return `Xato kod terildi, qayta urinib ko'ring`
        }else if (lang == "en"){
            return `Error code dialed, try again`
        }else if (lang == "ru"){
            return `Набран код ошибки, попробуйте еще раз`
        }
    }

    static finishReg(lang){
        if(lang == "uz"){
            return `Ro'yxatga olish muvaffaqiyatli o'tdi!`
        }else if (lang == "en"){
            return `Registration was successful!`
        }else if (lang == "ru"){
            return `Регистрация прошла успешно!`
        }
    }
}