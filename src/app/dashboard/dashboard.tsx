import { IgrButton, IgrButtonModule, IgrCard, IgrCardActions, IgrCardHeader, IgrCardMedia, IgrCardModule, IgrIconButton, IgrIconButtonModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { IgrCategoryChart, IgrCategoryChartModule } from '@infragistics/igniteui-react-charts';
import { IgrColumn, IgrGrid, IgrGridModule } from '@infragistics/igniteui-react-grids';
import { useGetTeamGrowthList, useGetTeamMembersGridList } from '../hooks/dashboard-data-hooks';
import '@infragistics/igniteui-react-grids/grids';
import styles from './dashboard.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrCardModule.register();
IgrCategoryChartModule.register();
IgrGridModule.register();
IgrIconButtonModule.register();
IgrRippleModule.register();

export default function Dashboard() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { dashboardDataTeamMembersGrid } = useGetTeamMembersGridList();
  const { dashboardDataTeamGrowth } = useGetTeamGrowthList();

  return (
    <>
      <div className={classes("row-layout dashboard-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <div className={classes("column-layout group_2")}>
              <div className={classes("row-layout group_3")}>
                <div className={classes("column-layout group_4")}>
                  <h5 className={classes("h5")}>
                    <span>Good Morning, Sandy!</span>
                  </h5>
                  <p className={classes("typography__body-1 text")}>
                    <span>Your Highlights</span>
                  </p>
                </div>
              </div>
              <div className={classes("row-layout group_5")}>
                <IgrCard className={classes("card")}>
                  <IgrCardMedia className={classes("media-content")} key={uuid()}>
                    <img src="/src/assets/Illustration1.svg" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>Team Stats</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>2010-2022</span>
                    </h5>
                  </IgrCardHeader>
                  <IgrCardActions className={classes("actions-content")} key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrButton variant="flat" size="large" className={classes("button")}>
                        <span key={uuid()}>Details</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                    </div>
                    <div style={{display: 'contents'}} slot="end" key={uuid()}>
                      <IgrIconButton variant="flat" className={classes("icon-button")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>add_alert</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </IgrCardActions>
                </IgrCard>
                <IgrCard className={classes("card")}>
                  <IgrCardMedia className={classes("media-content")} key={uuid()}>
                    <img src="/src/assets/Illustration2.svg" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>Ideation Workshop</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>View Proposals</span>
                    </h5>
                  </IgrCardHeader>
                  <IgrCardActions className={classes("actions-content")} key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrButton variant="flat" size="large" className={classes("button")}>
                        <span key={uuid()}>Details</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                    </div>
                    <div style={{display: 'contents'}} slot="end" key={uuid()}>
                      <IgrIconButton variant="flat" className={classes("icon-button")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>add_alert</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </IgrCardActions>
                </IgrCard>
                <IgrCard className={classes("card")}>
                  <IgrCardMedia className={classes("media-content")} key={uuid()}>
                    <img src="/src/assets/Illustration3.svg" className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>Upcoming Training</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>July 2022</span>
                    </h5>
                  </IgrCardHeader>
                  <IgrCardActions className={classes("actions-content")} key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrButton variant="flat" size="large" className={classes("button")}>
                        <span key={uuid()}>Details</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                    </div>
                    <div style={{display: 'contents'}} slot="end" key={uuid()}>
                      <IgrIconButton variant="flat" className={classes("icon-button")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>add_alert</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </IgrCardActions>
                </IgrCard>
              </div>
            </div>
            <div className={classes("row-layout group_6")}>
              <div className={classes("column-layout group_7")}>
                <h6 className={classes("h6")}>
                  <span>Current Team Members</span>
                </h6>
                <IgrGrid data={dashboardDataTeamMembersGrid} primaryKey="FirstName" displayDensity="cosy" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
                  <IgrColumn field="FirstName" dataType="string" header="FirstName" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="LastName" dataType="string" header="LastName" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="HireDate" dataType="string" header="HireDate" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="ID" dataType="number" header="ID" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="Department" dataType="string" header="Department" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="Position" dataType="string" header="Position" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="Email" dataType="string" header="Email" sortable="true" selectable="false"></IgrColumn>
                  <IgrColumn field="Phone" dataType="string" header="Phone" sortable="true" selectable="false"></IgrColumn>
                </IgrGrid>
              </div>
              <div className={classes("column-layout group_8")}>
                <h6 className={classes("h6")}>
                  <span>Team Growth</span>
                </h6>
                <div className={classes("group_9")}>
                  <IgrCategoryChart dataSource={dashboardDataTeamGrowth} chartType="Area" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
