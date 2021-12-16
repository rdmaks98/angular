import {FormGroup} from '@angular/forms';

export function Password_ck(controlName : string,CompareControlName:string){
    return (Formgroup:FormGroup) => {
        const password = FormGroup.controls[controlName];
        const confirmpassword = FormGroup.controls[CompareControlName];
        
        if(password.value !== confirmpassword)
        {
            confirmpassword.setErrors({mustMatch:true});
        }
        else
        {
            confirmpassword.setErrors(null);
        }
    }
}