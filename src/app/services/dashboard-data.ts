import { AllTeamMembersType } from '../models/DashboardData/all-team-members-type';
import { FetchApi } from './fetch-api';
import { NewTeamMembersListType } from '../models/DashboardData/new-team-members-list-type';
import { TeamGrowthType } from '../models/DashboardData/team-growth-type';
import { TeamMembersGridType } from '../models/DashboardData/team-members-grid-type';

export async function getNewTeamMembersListList(): Promise<NewTeamMembersListType[]> {
  return await FetchApi.fetchApiResponse<NewTeamMembersListType[]>('https://excel2json.io/api/share/6371c465-f63a-4dd9-436e-08da496bf5f2', []);
}

export async function getTeamMembersGridList(): Promise<TeamMembersGridType[]> {
  return await FetchApi.fetchApiResponse<TeamMembersGridType[]>('https://excel2json.io/api/share/d2d94130-e6aa-4387-437e-08da496bf5f2', []);
}

export async function getTeamGrowthList(): Promise<TeamGrowthType[]> {
  return await FetchApi.fetchApiResponse<TeamGrowthType[]>('https://excel2json.io/api/share/9d362c81-e18a-4fff-4355-08da496bf5f2', []);
}

export async function getAllTeamMembersList(): Promise<AllTeamMembersType[]> {
  return await FetchApi.fetchApiResponse<AllTeamMembersType[]>('https://excel2json.io/api/share/d2d94130-e6aa-4387-437e-08da496bf5f2', []);
}
