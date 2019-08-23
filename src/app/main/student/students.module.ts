import { FuseUtils } from '@fuse/utils';

export class Student {
    id: string;
    avatar: string;
    room: string;
    studentnumber: string;
    studentid: string;
    prefix: string;
    firstname: string;
    lastname: string;
    identificationnumber: string;
    attendancedate: {
        day: string;
        month: string;
        year: string;
    }
    oldschool: string;
    province: string;
    lastfloor: string;
    birthday: {
        day: string;
        month: string;
        year: string;
    }
    sex: string;
    nationality: string;
    religion: string;
    fatherfullname: string;
    motherfullname: string;
    pp1set: string;
    pp1number: string;
    pp2number: string;
    enddateofapproval: {
        day: string;
        month: string;
        year: string;
    }
    approvaldate: {
        day: string;
        month: string;
        year: string;
    }
    cause: string;
    // id: string;
    // name: string;
    // lastName: string;
    // avatar: string;
    // nickname: string;
    // company: string;
    // jobTitle: string;
    // email: string;
    // phone: string;
    // address: string;
    // birthday: string;
    // notes: string;

    /**
     * Constructor
     *
     * @param contact
     */
    constructor(students) {
        {
            // this.id = contact.id || FuseUtils.generateGUID();
            // this.name = contact.name || '';
            // this.lastName = contact.lastName || '';
            // this.avatar = contact.avatar || 'assets/images/avatars/profile.jpg';
            // this.nickname = contact.nickname || '';
            // this.company = contact.company || '';
            // this.jobTitle = contact.jobTitle || '';
            // this.email = contact.email || '';
            // this.phone = contact.phone || '';
            // this.address = contact.address || '';
            // this.birthday = contact.birthday || '';
            // this.notes = contact.notes || '';
            this.id = students.id ||  FuseUtils.generateGUID();
            this.avatar = students.avatar || 'assets/images/avatars/profile.jpg';
            this.room = students.room || '';
            this.studentnumber = students.studentnumber || '';
            this.studentid = students.studentid || '';
            this.prefix = students.prefix || '';
            this.firstname = students.firstname || '';
            this.lastname = students.lastname || '';
            this.identificationnumber = students.identificationnumber || '';
            this.attendancedate = students.attendancedate || '';
            this.oldschool = students.oldschool || '';
            this.province = students.province || '';
            this.lastfloor = students.lastfloor || '';
            this.birthday = students.birthday || '';
            this.sex = students.sex || '';
            this.nationality = students.nationality || '';
            this.religion = students.religion || '';
            this.fatherfullname = students.fatherfullname || '';
            this.motherfullname = students.motherfullname || '';
            this.pp1set = students.pp1set || '';
            this.pp1number = students.pp1number || '';
            this.pp2number = students.pp2number || '';
            this.enddateofapproval = students.enddateofapproval || '';
            this.approvaldate = students.approvaldate || '';
            this.cause = students.cause || '';
        }
    }
}
