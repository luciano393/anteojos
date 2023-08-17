import { useState } from "react";

export const useCart = () => {
    const [openCar, setOpenCar] = useState(false);

    const toggleCar = () => {
        setOpenCar(!openCar)
    }

    return openCar
}

