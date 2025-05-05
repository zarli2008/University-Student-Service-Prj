export interface iQualificationInfo {
    code: string;
    description: string;
    points: number;
    courses: iCourseInfo[];
}
export interface iCourseInfo {
    code: string;
    description: string;
    points: number;
    
}