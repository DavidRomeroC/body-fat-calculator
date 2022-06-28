export const getPx = (vbfp, genere) => {

    if (genere === "male") {
        if (vbfp < 2) {
            return 0
        } else if (vbfp >= 2 && vbfp < 6) {
            return (((vbfp - 2) * 80) / 5).toFixed(1)
        } else if (vbfp >= 6 && vbfp < 14) {
            return (((vbfp - 2) * 208) / 13).toFixed(1)
        } else if (vbfp >= 14 && vbfp < 18) {
            return (((vbfp - 2) * 272) / 17).toFixed(1)
        } else if (vbfp >= 18 && vbfp < 25) {
            return (((vbfp - 2) * 400) / 24).toFixed(1)
        } else if (vbfp >= 25 && vbfp < 26) {
            return (((vbfp - 2) * 400) / 25).toFixed(1)
        } else if (vbfp >= 26) {
            return 400
        }
    } else if (genere === "female") {
        if (vbfp < 10) {
            return 0
        } else if (vbfp >= 10 && vbfp < 14) {
            return (((vbfp - 10) * 38) / 2.185).toFixed(1)
        } else if (vbfp >= 14 && vbfp < 21) {
            return (((vbfp - 10) * 146) / 8.395).toFixed(1)
        } else if (vbfp >= 21 && vbfp < 25) {
            return (((vbfp - 10) * 254) / 14.605).toFixed(1)
        } else if (vbfp >= 25 && vbfp < 32) {
            return (((vbfp - 10) * 362) / 20.815).toFixed(1)
        } else if (vbfp >= 32 && vbfp < 33) {
            return (((vbfp - 10) * 400) / 23).toFixed(1)
        } else if (vbfp >= 33) {
            return 400
        }
    }
}