const pnrKey = {
    fileKey: "aaa",
    crsId: "ABC123"
}

const respo = {
    tattoo: "id-0",
    posCrs: "",
    pccIataNumber: "",
    posCity: "",
    posCountry: "",
    respoOffice: ""
}

const group = {
    tattoo: "id-1",
    groupName: "",
    groupCount: 2,
    numberOfNames: 3,
    numberOfOriginalBooked: 1
}

const name = {
    tattoo: "id-2",
    firstName: "",
    lastName: "",
    elementNumber: 1
}

const segment = {
    tattoo: "id-3",
    airlineCode: "LX",
    flightNumber: 500,
    origin: "BUD",
    dest: "FRA",
    dep: "yyyyMMdd HHmm",
    depDW: 1,
    depUTC: "yyyyMMdd HHmm",
    arr: "yyyyMMdd HHmm",
    arrUTC: "yyyyMMdd HHmm",
    bookingClass: "C",
    openSeg: false,
    arnk: false,
    infoSegment: false,
    actionCodeCategory: "HK",
    actionCode: "HK",
    refAirOp: false,
    cShare: false,
    cShareAC: "LH",
    cShareFN: 600,
    cShareBC: "M",
    numberOfSeats: 40,
    allotment: false,
    swissEBC: "",
    marriageGroup: ""
}

const osi = {
    tattoo: "id-4",
    airlineCode: "LX",
    osiType: "",
    osiText: ""
}

const remark = {
    tattoo: "id-5",
    remarkType: "SAVE | CONF | SPL | TTL | STD",
    remarkText: "",
    creatingOffice: "",
    remarkCategory: ""
}

const contact = {
    tattoo: "id-6",
    type: "DEFAULT, EMAIL, FAX, HOME, BUSINESS, MOBILE, TRAVELAGENT",
    text: ""
}

const ssr = {
    tattoo: "id-7",
    airlineCode: "LX",
    ssrType: "",
    ssrText: "",
    actionCode: "",
    chargeable: true
}

const sk = {
    tattoo: "id-8",
    airlineCode: "LX",
    skType: "",
    skText: "",
    actionCode: ""
}

const ticket = {
    tattoo: "id-9",
    airNum: "500",
    docNum: "",
    paxType: "ADL",
    elementType: "",
    iInd: "issueIndicator",
    conjNum: "conjunctionNumber"
}

const deletedSegmentDescriptor = {
    origin: "BUD",
    dest: "FRA",
    airlineCode: "LX",
    flightNumber: 500,
    flightSuffix: "A",
    depDate: "yyyyMMdd HHmm",
    numberOfDeletions: 3
}

const pnr = {
    crsId: "1A",
    recordLocator: "B",
    creationDate: "yyyyMMdd HHmm",
    creationDateTime: "yyyyMMdd HHmm",
    commencePoint: "C",
    nonCommercial: false,
    canceled: true,
    operating: false,
    allotment: true,
    oRespOff: null,
    oPosCnty: "E",
    oPosCity: "F",
    oPosCrs: "G",
    lastArrivalUTC: null,
    extendedLastArrivalUTC: null,
    firstDepartureUTC: null,
    extendedFirstDepartureUTC: null,
    eotDate: "yyyyMMdd HHmm",
    crsVersionNumber: 0,
    pnrKeys: [pnrKey, pnrKey],
    respo: respo,
    group: group,
    names: [name, name, name],
    segments: [segment, segment],
    osis: [osi, osi],
    remarks: [remark, remark],
    contacts: [contact, contact],
    ssrs: [ssr, ssr],
    sks: [sk, sk],
    tickets: [ticket, ticket, ticket],
    deletedSegmentDescriptors: [deletedSegmentDescriptor, deletedSegmentDescriptor]
}

export default pnr
