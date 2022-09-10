import { ID, NumberOrNull, StringOrNull } from '~/lib/models/index'

export const resource = `/competition/meet`
export type Meet = ID & {
  state: number
  // General data
  name: string
  nameEn: StringOrNull
  city: StringOrNull
  cityEn: StringOrNull
  nation: number
  course: NumberOrNull // ENUM - Meet.course
  entryType: NumberOrNull // ENUM - Meet.entryType
  swrid: StringOrNull
  resultUrl: StringOrNull

  // Entry deadlines & start
  entryDeadline: StringOrNull
  entryDeadlineTime: StringOrNull
  entryStartDate: StringOrNull
  entryWithdraw: StringOrNull
  maxEntriesIndividual: NumberOrNull
  maxEntriesRelay: NumberOrNull
  ageCalculation: {
    calculatioType: number
    calculationDate: StringOrNull
  }

  // Org / Host stuff
  hostClub: StringOrNull
  hostClubUrl: StringOrNull
  organizer: StringOrNull
  organizerUrl: StringOrNull

  // Other
  altitude: NumberOrNull
  reserveCount: NumberOrNull
  startMethod: StringOrNull
  timing: NumberOrNull // ENUM - Meet.timing
  type: StringOrNull
  // number: StringOrNull
}
