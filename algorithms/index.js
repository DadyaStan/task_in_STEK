import fs from 'fs';
import { sortList } from './sortList.js';
import { getUnpaidList } from './getUnpaidList.js';

const checkList = fs.readFileSync('./tasks/чеки.txt', 'utf-8').split('\r\n');

const monthList = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
const serviceList = ["газоснабжение", "ГВС", "домофон", "капремонт", "квартплата", "ТБО", "теплоснабжение", "ХВС", "электроснабжение"];

const sortListBy = sortList(checkList, monthList);
const unpaidList = getUnpaidList(sortListBy.servicesByMonthList, serviceList, monthList);

fs.writeFileSync('./algorithms/чеки_по_папкам.txt', sortListBy.foldersList);
fs.appendFileSync('./algorithms/чеки_по_папкам.txt', unpaidList);