export interface Log {
    event: string;
    ip: string;
    time: number;
    osCode: string;
    osName: string;
    osVersion: string;
    clientType: string;
    clientCode: string;
    clientName: string;
    clientVersion: string;
    clientEngine: string;
    clientEngineVersion: string;
    deviceName: string;
    deviceBrand: string;
    deviceModel: string;
    countryCode: string;
    countryName: string;
}
export declare type Logs = Log[];
export interface LogsList {
    logs: Logs;
}
export interface Team {
    $id: string;
    dateCreated: number;
    name: string;
    sum: number;
}
export declare type Teams = Team[];
export interface TeamsList {
    sum: number;
    teams: Teams;
}
export interface Membership {
    $id: string;
    userId: string;
    teamId: string;
    name: string;
    email: string;
    invited: number;
    joined: number;
    confirm: boolean;
    roles: string[];
}
export declare type Memberships = Membership[];
export interface MembershipsList {
    sum: number;
    memberships: Memberships;
}
export declare type Document<T> = T & DocumentBase;
export interface DocumentBase {
    $id?: string;
    $collection?: string;
    $permissions?: {
        read: string[];
        write: string[];
    };
}
export declare type Documents<T> = Document<T>[];
export interface DocumentsList<T> {
    sum: number;
    documents: Documents<T>;
}
export interface JWT {
    jwt: string;
}
export interface Locale {
    ip: string;
    countryCode: string;
    country: string;
    continentCode: string;
    continent: string;
    eu: boolean;
    currency: string;
}
export declare type Countries = Country[];
export interface Country {
    name: string;
    code: string;
}
export interface CountriesList {
    sum: number;
    countries: Countries;
}
export declare type Continents = Continent[];
export interface Continent {
    name: string;
    code: string;
}
export interface ContinentsList {
    sum: number;
    continents: Continents;
}
export declare type Phones = Phone[];
export interface Phone {
    countryCode: string;
    countryName: string;
    code: string;
}
export interface PhonesList {
    sum: number;
    phones: Phones;
}
export declare type Currencies = Currency[];
export interface Currency {
    symbol: string;
    name: string;
    symbolNative: string;
    decimalDigits: number;
    rounding: number;
    code: string;
    namePlural: string;
}
export interface CurrenciesList {
    sum: number;
    currencies: Currencies;
}
export declare type Languages = Language[];
export interface Language {
    name: string;
    code: string;
    nativeName: string;
}
export interface LanguagesList {
    sum: number;
    languages: Languages;
}
export interface User extends Account {
}
export interface Account {
    $id: string;
    email: string;
    emailVerification: boolean;
    name: string;
    passwordUpdate: number;
    prefs: Record<string, unknown>;
    registration: number;
    status: number;
}
export declare type Sessions = Session[];
export interface SessionsList {
    sum: number;
    sessions: Sessions;
}
export interface Session {
    $id: string;
    userId: string;
    expire: number;
    provider: string;
    providerUid: string;
    providerToken: string;
    ip: string;
    osCode: string;
    osName: string;
    osVersion: string;
    clientType: string;
    clientCode: string;
    clientName: string;
    clientVersion: string;
    clientEngine: string;
    clientEngineVersion: string;
    deviceName: string;
    deviceBrand: string;
    deviceModel: string;
    countryCode: string;
    countryName: string;
    current: boolean;
}
export interface Token {
    $id: string;
    userId: string;
    secret: string;
    expire: number;
}
export interface AppWriteBaseModel {
}
export declare class AppWriteBaseModel {
    $id?: string;
    $collection?: string;
    $permissions?: {
        read: string[];
        write: string[];
    };
    dateCreated?: number;
    dateUpdated?: number;
}
export declare type Files = File[];
export interface FilesList {
    sum: number;
    files: Files;
}
export interface File {
    $id: string;
    $permissions?: {
        read: string[];
        write: string[];
    };
    name: string;
    dateCreated: number;
    signature: string;
    mimeType: string;
    sizeOriginal: string;
}
export declare type Executions = Execution[];
export interface ExecutionsList {
    sum: number;
    executions: Executions;
}
export interface Execution {
    $id: string;
    functionId: string;
    dateCreated: number;
    trigger: string;
    status: string;
    exitCode: number;
    stdout: string;
    stderr: string;
    time: number;
}
