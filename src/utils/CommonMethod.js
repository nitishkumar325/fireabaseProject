 export default class Validation{
     static checkProperEmail(email )
    {
        console.warn(typeof(email))
        if(email.includes('@'))
        return true;
        else
        false

    }
}