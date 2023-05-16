import { AbstractControl, FormControl } from "@angular/forms";
import { retry } from "rxjs";

export class CustomValidator {

    static validateName(control: AbstractControl) {
        const value = control.value as string;
        if (value.includes('test')) {
            return { invalidName: true }
        }
        return null;
    }

    static validateAmount(str: string) {
        // console.log('validator working 1 ');
        return (control: AbstractControl) => {
            const value = control.value as number;
            console.log('validator working ', str, value);
            if (control.value < 1000) {
                return { invalidAmount: true };
            }
            return { invalidAmount: false };
        };
    }

    static validatedate(control: FormControl) {
        const checkinDate: any = new Date(control.get('checkinTime')?.value);
        const checkoutDate: any = new Date(control.get('checkoutTime')?.value);
        const diffTime = checkoutDate - checkinDate;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        console.log(diffTime, diffDays)
        if (diffDays <= 0) {
            control.get('checkoutTime')?.setErrors({ invalidDate: true });
            return { invalidDate: true }
        }
        return null;
    }

}
