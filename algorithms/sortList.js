/**
 * Возвращает упорядоченный
 * 
 * @param {Array} checkList                       - Список оплаченных чеков за год
 * @param {Array} monthList                       - Список просматриваеммых месяцев
 * @returns {{foldersList: String,
 *            servicesByMonthList: Array}}        - Упорядоченный по папкам месяцам список оплаченных услуг
 */

export function sortList (checkList, monthList) {
    const servicesByMonthList = [];
    let foldersList = '';

    for (let month = 0; month < monthList.length; month++) {
        servicesByMonthList.push([]);

        checkList.forEach((checkService) => {
            if (checkService.includes(monthList[month])) {
                foldersList = foldersList + '/' + monthList[month] + '/' + checkService + '\r\n';
                servicesByMonthList[month].push(checkService.replace(/.pdf/, ''));
            }
        });
    }

   return {foldersList, servicesByMonthList};
}