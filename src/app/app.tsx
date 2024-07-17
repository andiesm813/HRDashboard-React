import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrCard, IgrCardHeader, IgrCardMedia, IgrCardModule, IgrCheckbox, IgrCheckboxModule, IgrDialog, IgrDialogModule, IgrIconButton, IgrIconButtonModule, IgrList, IgrListHeader, IgrListHeaderModule, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule, IgrSwitch, IgrSwitchModule } from '@infragistics/igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useGetNewTeamMembersListList } from './hooks/dashboard-data-hooks';
import styles from './app.module.css';
import createClassTransformer from './style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrCardModule.register();
IgrCheckboxModule.register();
IgrDialogModule.register();
IgrIconButtonModule.register();
IgrListHeaderModule.register();
IgrListModule.register();
IgrRippleModule.register();
IgrSwitchModule.register();

export default function App() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const settings = useRef<IgrDialog>(null);
  const [listItemVisible, setListItemVisible] = useState<boolean | undefined>(false);
  const [checked, setChecked] = useState<boolean | undefined>(true);
  const { dashboardDataNewTeamMembersList } = useGetNewTeamMembersListList();

  return (
    <>
      <div className={classes("row-layout master-page-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("row-layout group_1")}>
            <div className={classes("column-layout left-panel")}>
              <div className={classes("column-layout logo-and-nav")}>
                <div className={classes("row-layout logo")}>
                  <img src="/src/assets/LogoHR.svg" className={classes("image")} />
                  <p className={classes("typography__subtitle-2 text")}>
                    <span>HR</span>
                  </p>
                  <p className={classes("typography__subtitle-2 text_1")}>
                    <span>CORP</span>
                  </p>
                </div>
                <IgrList className={classes("navigation")}>
                  <div style={{display: 'contents'}} onClick={() => navigate(`/dashboard`)} key={uuid()}>
                    <IgrListItem>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar")}>
                          <span className={classes("material-icons icon")} key={uuid()}>
                            <span key={uuid()}>dashboard</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div key={uuid()}>
                        <p className={classes("typography__subtitle-2 text_2")} key={uuid()}>
                          <span>DASHBOARD</span>
                        </p>
                      </div>
                    </IgrListItem>
                  </div>
                  <div style={{display: 'contents'}} onClick={() => navigate(`/team`)} key={uuid()}>
                    <IgrListItem>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>people</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div key={uuid()}>
                        <p className={classes("typography__subtitle-2 text_3")} key={uuid()}>
                          <span>TEAM</span>
                        </p>
                      </div>
                    </IgrListItem>
                  </div>
                  <div style={{display: 'contents'}} onClick={() => navigate(`/events`)} key={uuid()}>
                    <IgrListItem>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_2")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>stars</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div key={uuid()}>
                        <p className={classes("typography__subtitle-2 text_3")} key={uuid()}>
                          <span>EVENTS</span>
                        </p>
                      </div>
                    </IgrListItem>
                  </div>
                  <div style={{display: 'contents'}} onClick={() => settings?.current?.toggle()} key={uuid()}>
                    {listItemVisible && (
                      <IgrListItem>
                        <div style={{display: 'contents'}} slot="start" key={uuid()}>
                          <IgrAvatar shape="circle" className={classes("avatar_3")}>
                            <span className={classes("material-icons icon_1")} key={uuid()}>
                              <span key={uuid()}>settings</span>
                            </span>
                          </IgrAvatar>
                        </div>
                        <div key={uuid()}>
                          <p className={classes("typography__subtitle-2 text_3")} key={uuid()}>
                            <span>SETTINGS</span>
                          </p>
                        </div>
                      </IgrListItem>
                    )}
                  </div>
                </IgrList>
              </div>
              <div className={classes("column-layout user")}>
                <IgrAvatar src="/src/assets/Avatar13.png" size="large" shape="circle" className={classes("avatar_4")}></IgrAvatar>
                <p className={classes("typography__subtitle-2 text_4")}>
                  <span>Sandy Anderson</span>
                </p>
                <p className={classes("typography__caption text_5")}>
                  <span>UX DESIGN LEAD</span>
                </p>
              </div>
              <div className={classes("column-layout background")}>
                <div className={classes("row-layout group_2")}>
                  <IgrButton variant="flat" size="large" clicked={() => settings?.current?.toggle()} className={classes("button button_2")}>
                    <span className={classes("material-icons icon_2")} key={uuid()}>
                      <span key={uuid()}>settings</span>
                    </span>
                    <span key={uuid()}>Settings</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </div>
            </div>
          </div>
          <div className={classes("view-container")}>
            <Outlet></Outlet>
          </div>
          <div className={classes("column-layout right-panel")}>
            <div className={classes("column-layout group_3")}>
              <div className={classes("row-layout group_4")}>
                <h6 className={classes("h6")}>
                  <span>Calendar</span>
                </h6>
                <IgrIconButton variant="flat" className={classes("icon-button")}>
                  <span className={classes("material-icons icon_3")} key={uuid()}>
                    <span key={uuid()}>notifications</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
              <IgrList className={classes("navigation")}>
                <IgrListHeader key={uuid()}>
                  <div key={uuid()}>July 1st</div>
                </IgrListHeader>
                <IgrListItem key={uuid()}>
                  <div key={uuid()}>
                    <div className={classes("row-layout logo")} key={uuid()}>
                      <p className={classes("typography__subtitle-1 text_6")}>
                        <span>10 AM</span>
                      </p>
                      <div className={classes("column-layout group_5")}>
                        <p className={classes("typography__overline text_5")}>
                          <span>TRAINING</span>
                        </p>
                        <p className={classes("typography__subtitle-2 text_7")}>
                          <span>Intro to Scrum</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </IgrListItem>
                <IgrListItem key={uuid()}>
                  <div key={uuid()}>
                    <div className={classes("row-layout logo")} key={uuid()}>
                      <p className={classes("typography__subtitle-1 text_6")}>
                        <span>12 PM</span>
                      </p>
                      <div className={classes("column-layout group_6")}>
                        <p className={classes("typography__overline text_5")}>
                          <span>OFFICE HOURS</span>
                        </p>
                        <p className={classes("typography__subtitle-2 text_7")}>
                          <span>Customers Q&amp;A</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </IgrListItem>
                <IgrListHeader key={uuid()}>
                  <div key={uuid()}>July 5th</div>
                </IgrListHeader>
                <IgrListItem key={uuid()}>
                  <div key={uuid()}>
                    <div className={classes("row-layout logo")} key={uuid()}>
                      <p className={classes("typography__subtitle-1 text_6")}>
                        <span>10 AM</span>
                      </p>
                      <div className={classes("column-layout group_7")}>
                        <p className={classes("typography__overline text_5")}>
                          <span>HR CORP</span>
                        </p>
                        <p className={classes("typography__subtitle-2 text_7")}>
                          <span>Company Meeting</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </IgrListItem>
                <IgrListItem key={uuid()}>
                  <div key={uuid()}>
                    <div className={classes("row-layout logo")} key={uuid()}>
                      <p className={classes("typography__subtitle-1 text_6")}>
                        <span>12 PM</span>
                      </p>
                      <div className={classes("column-layout group_8")}>
                        <p className={classes("typography__overline text_5")}>
                          <span>TRAINING</span>
                        </p>
                        <p className={classes("typography__subtitle-2 text_7")}>
                          <span>Managing People</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </IgrListItem>
              </IgrList>
            </div>
            <div className={classes("column-layout group_9")}>
              <h6 className={classes("h6_1")}>
                <span>New Team Members</span>
              </h6>
              <IgrList className={classes("navigation")}>
                {dashboardDataNewTeamMembersList?.map((item) => (
                  <IgrListItem key={uuid()}>
                    <div key={uuid()}>
                      <div className={classes("row-layout logo")} key={uuid()}>
                        <IgrAvatar src={item.Photo} shape="circle" className={classes("avatar_5")}></IgrAvatar>
                        <div className={classes("column-layout group_10")}>
                          <div className={classes("row-layout group_11")}>
                            <p className={classes("typography__subtitle-2 text_8")}>
                              <span>{item.Name}</span>
                            </p>
                          </div>
                          <p className={classes("typography__overline text_5")}>
                            <span>{item.Position}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </IgrListItem>
                ))}
              </IgrList>
            </div>
          </div>
        </div>
        <IgrDialog closeOnOutsideClick="true" ref={settings}>
          <h5 slot="title" key={uuid()}>
            <span>Settings</span>
          </h5>
          <div className={classes("column-layout group_12")} key={uuid()}>
            <div className={classes("column-layout group_13")}>
              <p className={classes("typography__subtitle-2 text_2")}>
                <span>THEME</span>
              </p>
              <div className={classes("row-layout group_13")}>
                <IgrCard elevated="true" className={classes("card")}>
                  <IgrCardMedia className={classes("media-content")} key={uuid()}>
                    <img src="/src/assets/theme-light.svg" className={classes("image_1")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}></span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>Default</span>
                    </h5>
                  </IgrCardHeader>
                </IgrCard>
                <IgrCard className={classes("card")}>
                  <IgrCardMedia className={classes("media-content")} key={uuid()}>
                    <img src="/src/assets/theme-dark.svg" className={classes("image_1")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}></span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>Dark</span>
                    </h5>
                  </IgrCardHeader>
                </IgrCard>
              </div>
            </div>
            <div className={classes("column-layout group_13")}>
              <p className={classes("typography__subtitle-2 text_2")}>
                <span>APPLICATION</span>
              </p>
              <div className={classes("column-layout group_14")}>
                <IgrCheckbox labelPosition="after" className={classes("user-input")}>
                  <span key={uuid()}>Auto-start application</span>
                </IgrCheckbox>
                <IgrCheckbox labelPosition="after" className={classes("user-input")}>
                  <span key={uuid()}>Open application in the background</span>
                </IgrCheckbox>
                <IgrCheckbox labelPosition="after" checked={checked} change={(_c, e) => setChecked(e.detail)} className={classes("user-input")}>
                  <span key={uuid()}>On close, keep the application running</span>
                </IgrCheckbox>
              </div>
            </div>
            <div className={classes("column-layout group_13")}>
              <p className={classes("typography__subtitle-2 text_2")}>
                <span>NOTIFICATIONS</span>
              </p>
              <div className={classes("column-layout group_14")}>
                <IgrSwitch checked={checked} change={(_c, e) => setChecked(e.detail)} className={classes("user-input")}>
                  <span key={uuid()}>Enable Notifications</span>
                </IgrSwitch>
                <IgrSwitch className={classes("user-input")}>
                  <span key={uuid()}>Play sound for notifications</span>
                </IgrSwitch>
              </div>
            </div>
          </div>
          <div slot="footer" key={uuid()}>
            <IgrButton size="large" clicked={() => settings?.current?.toggle()} className={classes("button_1")} key={uuid()}>
              <span key={uuid()}>Done</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </IgrDialog>
      </div>
    </>
  );
}
