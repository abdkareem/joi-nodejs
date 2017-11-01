const ERRORS = new Map();
const errorKeys = {
    "er01": "ER-01",
    "er02": "ER-02",
    "er03": "ER-03",
    "er04": "ER-04",
    "er05": "ER-05",
    "er06": "ER-06",
    "er07": "ER-07",
    "er08": "ER-08",
    "er09": "ER-09",
    "er10": "ER-10",
    "er11": "ER-11",
    "er12": "ER-12",
    "er13": "ER-13",
    "er14": "ER-14",
    "er15": "ER-15",
    "er16": "ER-16",
    "er17": "ER-17",
    "er18": "ER-18",
    "er19": "ER-19",
    "er20": "ER-20",
    "er21": "ER-21",
    "er22": "ER-22",
    "er23": "ER-23",
    "er24": "ER-24",
    "er25": "ER-25",
    "er26": "ER-26",
    "er27": "ER-27",
    "er28": "ER-28",
    "er29": "ER-29",
    "er30": "ER-30",
    "er31": "ER-31",
    "er32": "ER-32",
    "er33": "ER-33",
    "er34": "ER-34",
    "er35": "ER-35",
    "er36": "ER-36",
    "er37": "ER-37",
    "er38": "ER-38"
};

ERRORS.set(errorKeys.er01, {
    code: 'ER-01',
    detail: 'sender accountNo is not allowed to be empty'
});

ERRORS.set(errorKeys.er02, {
    code: 'ER-02',
    detail: 'sender accountNo must be a string'
});

ERRORS.set(errorKeys.er03, {
    code: 'ER-03',
    detail: 'sender routingNo is not allowed to be empty'
});

ERRORS.set(errorKeys.er04, {
    code: 'ER-04',
    detail: 'sender routingNo must be a string'
});

ERRORS.set(errorKeys.er05, {
    code: 'ER-05',
    detail: 'sender firstName is not allowed to be empty'
});

ERRORS.set(errorKeys.er06, {
    code: 'ER-06',
    detail: 'sender firstName must be a string'
});

ERRORS.set(errorKeys.er07, {
    code: 'ER-07',
    detail: 'sender lastName is not allowed to be empty'
});

ERRORS.set(errorKeys.er08, {
    code: 'ER-08',
    detail: 'sender lastName must be a string'
});

ERRORS.set(errorKeys.er09, {
    code: 'ER-09',
    detail: 'sender firstLine is not allowed to be empty'
});

ERRORS.set(errorKeys.er10, {
    code: 'ER-10',
    detail: 'sender firstLine must be a string'
});

ERRORS.set(errorKeys.er11, {
    code: 'ER-11',
    detail: 'sender secondLine must be a string'
});

ERRORS.set(errorKeys.er12, {
    code: 'ER-12',
    detail: 'sender city is not allowed to be empty'
});

ERRORS.set(errorKeys.er13, {
    code: 'ER-13',
    detail: 'sender city must be a string'
});

ERRORS.set(errorKeys.er14, {
    code: 'ER-14',
    detail: 'sender state is not allowed to be empty'
});

ERRORS.set(errorKeys.er15, {
    code: 'ER-15',
    detail: 'sender state must be a string'
});

ERRORS.set(errorKeys.er16, {
    code: 'ER-16',
    detail: 'sender zipCode is not allowed to be empty'
});

ERRORS.set(errorKeys.er17, {
    code: 'ER-17',
    detail: 'sender zipCode must be a string'
});

///////

ERRORS.set(errorKeys.er18, {
    code: 'ER-18',
    detail: 'recipient accountNo is not allowed to be empty'
});

ERRORS.set(errorKeys.er19, {
    code: 'ER-19',
    detail: 'recipient accountNo must be a string'
});

ERRORS.set(errorKeys.er20, {
    code: 'ER-20',
    detail: 'recipient routingNo is not allowed to be empty'
});

ERRORS.set(errorKeys.er21, {
    code: 'ER-21',
    detail: 'recipient routingNo must be a string'
});

ERRORS.set(errorKeys.er22, {
    code: 'ER-22',
    detail: 'recipient firstName is not allowed to be empty'
});

ERRORS.set(errorKeys.er23, {
    code: 'ER-23',
    detail: 'recipient firstName must be a string'
});

ERRORS.set(errorKeys.er24, {
    code: 'ER-24',
    detail: 'recipient lastName is not allowed to be empty'
});

ERRORS.set(errorKeys.er25, {
    code: 'ER-25',
    detail: 'recipient lastName must be a string'
});

ERRORS.set(errorKeys.er26, {
    code: 'ER-26',
    detail: 'recipient firstLine is not allowed to be empty'
});

ERRORS.set(errorKeys.er27, {
    code: 'ER-27',
    detail: 'recipient firstLine must be a string'
});

ERRORS.set(errorKeys.er28, {
    code: 'ER-28',
    detail: 'recipient secondLine must be a string'
});

ERRORS.set(errorKeys.er29, {
    code: 'ER-29',
    detail: 'recipient city is not allowed to be empty'
});

ERRORS.set(errorKeys.er30, {
    code: 'ER-30',
    detail: 'recipient city must be a string'
});

ERRORS.set(errorKeys.er31, {
    code: 'ER-31',
    detail: 'recipient state is not allowed to be empty'
});

ERRORS.set(errorKeys.er32, {
    code: 'ER-32',
    detail: 'recipient state must be a string'
});

ERRORS.set(errorKeys.er33, {
    code: 'ER-33',
    detail: 'recipient zipCode is not allowed to be empty'
});

ERRORS.set(errorKeys.er34, {
    code: 'ER-34',
    detail: 'recipient zipCode must be a string'
});

ERRORS.set(errorKeys.er35, {
    code: 'ER-35',
    detail: 'sender registeredPhoneNo is not allowed to be empty'
});

ERRORS.set(errorKeys.er36, {
    code: 'ER-36',
    detail: 'sender registeredPhoneNo must be a string'
});

ERRORS.set(errorKeys.er37, {
    code: 'ER-37',
    detail: 'recipient registeredPhoneNo is not allowed to be empty'
});

ERRORS.set(errorKeys.er38, {
    code: 'ER-38',
    detail: 'recipient registeredPhoneNo must be a string'
});












