import { ApiConstants } from "../contants"

const getFlagIcon = (
    code = 'IN',
    style = ApiConstants.COUNTRY_FLAG.style.SHINY,
    size = ApiConstants.COUNTRY_FLAG.size[64],
) => `${ApiConstants.COUNTRY_FLAG.BASE_URL}/${code}/${style}/${size}.png`

export default {
    getFlagIcon
}