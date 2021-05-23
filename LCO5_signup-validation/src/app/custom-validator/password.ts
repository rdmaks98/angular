import { Form, FormGroup } from "@angular/forms";


export function Password(controlName:string,CompareControlName:string){
    return(FormGroup:FormGroup) => {
        const password  = FormGroup.controls[controlName];
        const ConfPass = FormGroup.controls[CompareControlName];

        if(password.value !== ConfPass.value)
        {
            ConfPass.setErrors({mustMatch:true})
        }
        else
        {
            ConfPass.setErrors(null);
        }
    }
}