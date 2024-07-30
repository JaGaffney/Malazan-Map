
import { Color } from 'three';
import { useSelector } from 'react-redux';

const Lighting = () => {
    const nightData = useSelector((state: any) => state.settings.night)
    const lightData = useSelector((state: any) => state.settings.lights)

    const lightColor = new Color("#FFCB8E").convertSRGBToLinear().convertSRGBToLinear();
    const nightColor = new Color("#091b34").convertSRGBToLinear().convertSRGBToLinear();

    return (
        lightData ? (
            <pointLight position={[160, 200, 93]} castShadow color={nightData ? nightColor : lightColor} intensity={nightData ? 2000 : 1} />
        ) : (
            null
        )

    )
}

export default Lighting
