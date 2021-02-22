
export const validateAddress = inputs => {
    let error = {
        hasError: false
    }

    if (!inputs.pickup.coordinate.latitude) {
        error.hasError = true;
        error.message = 'Pick Address is required';
    }

    if (!inputs.drop.coordinate.latitude) {
        error.hasError = true;
        error.message = 'Drop Address is required';
    }

    return error;
}