export const localStorageSave = (data: any): void => {
    if (typeof window !== "undefined") {
        localStorage.setItem("books", JSON.stringify(data));
    }
};

export const onLoadDataFromLocalStorage = () => {
    if (typeof Storage !== "undefined") {
        let retrievedObject: any = null;
        if (typeof window !== "undefined") {
            retrievedObject = localStorage.getItem("books");
        } else {
            return null;
        }
        if (retrievedObject === null) {
            return null;
        }
        const returnedData = JSON.parse(retrievedObject);
        if (returnedData !== undefined) {
            return returnedData;
        }
    } else {
        return null;
    }
};
