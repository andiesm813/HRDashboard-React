import { useCallback, useEffect, useState } from 'react';
import { AllTeamMembersType } from '../models/DashboardData/all-team-members-type';
import { getAllTeamMembersList, getNewTeamMembersListList, getTeamGrowthList, getTeamMembersGridList } from '../services/dashboard-data';
import { NewTeamMembersListType } from '../models/DashboardData/new-team-members-list-type';
import { TeamGrowthType } from '../models/DashboardData/team-growth-type';
import { TeamMembersGridType } from '../models/DashboardData/team-members-grid-type';

export const useGetNewTeamMembersListList = () => {
  const [newTeamMembersList, setNewTeamMembersList] = useState<NewTeamMembersListType[]>([]);

  const requestNewTeamMembersList = useCallback(() => {
    let ignore = false;
    getNewTeamMembersListList()
      .then((data) => {
        if (!ignore) {
          setNewTeamMembersList(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestNewTeamMembersList();
  }, [requestNewTeamMembersList]);

  return { requestDashboardDataNewTeamMembersList: requestNewTeamMembersList, dashboardDataNewTeamMembersList: newTeamMembersList, setDashboardDataNewTeamMembersList: setNewTeamMembersList };
}

export const useGetTeamMembersGridList = () => {
  const [teamMembersGrid, setTeamMembersGrid] = useState<TeamMembersGridType[]>([]);

  const requestTeamMembersGrid = useCallback(() => {
    let ignore = false;
    getTeamMembersGridList()
      .then((data) => {
        if (!ignore) {
          setTeamMembersGrid(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestTeamMembersGrid();
  }, [requestTeamMembersGrid]);

  return { requestDashboardDataTeamMembersGrid: requestTeamMembersGrid, dashboardDataTeamMembersGrid: teamMembersGrid, setDashboardDataTeamMembersGrid: setTeamMembersGrid };
}

export const useGetTeamGrowthList = () => {
  const [teamGrowth, setTeamGrowth] = useState<TeamGrowthType[]>([]);

  const requestTeamGrowth = useCallback(() => {
    let ignore = false;
    getTeamGrowthList()
      .then((data) => {
        if (!ignore) {
          setTeamGrowth(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestTeamGrowth();
  }, [requestTeamGrowth]);

  return { requestDashboardDataTeamGrowth: requestTeamGrowth, dashboardDataTeamGrowth: teamGrowth, setDashboardDataTeamGrowth: setTeamGrowth };
}

export const useGetAllTeamMembersList = () => {
  const [allTeamMembers, setAllTeamMembers] = useState<AllTeamMembersType[]>([]);

  const requestAllTeamMembers = useCallback(() => {
    let ignore = false;
    getAllTeamMembersList()
      .then((data) => {
        if (!ignore) {
          setAllTeamMembers(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestAllTeamMembers();
  }, [requestAllTeamMembers]);

  return { requestDashboardDataAllTeamMembers: requestAllTeamMembers, dashboardDataAllTeamMembers: allTeamMembers, setDashboardDataAllTeamMembers: setAllTeamMembers };
}
