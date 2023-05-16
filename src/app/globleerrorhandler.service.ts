import { ErrorHandler } from "@angular/core"

export class GlobleErrorHandler implements ErrorHandler {
    handleError(error: any) {
        console.log(error)
    }

}