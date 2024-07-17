import { IgrCard, IgrCardContent, IgrCardHeader, IgrCardModule } from '@infragistics/igniteui-react';
import { useGetAllTeamMembersList } from '../hooks/dashboard-data-hooks';
import styles from './team.module.css';
import createClassTransformer from '../style-utils';

IgrCardModule.register();

export default function Team() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { dashboardDataAllTeamMembers } = useGetAllTeamMembersList();

  return (
    <>
      <div className={classes("row-layout team-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("column-layout group_1")}>
            <h5 className={classes("h5")}>
              <span>Team Members</span>
            </h5>
            <p className={classes("typography__body-1 text")}>
              <span>64 People</span>
            </p>
          </div>
          <div className={classes("row-layout group_2")}>
            {dashboardDataAllTeamMembers?.map((item) => (
              <IgrCard elevated="true" className={classes("card")} key={uuid()}>
                <IgrCardHeader key={uuid()}>
                  <h3 slot="title" key={uuid()}>
                    <span key={uuid()}></span>
                  </h3>
                  <h5 slot="subtitle" key={uuid()}>
                    <span key={uuid()}></span>
                  </h5>
                </IgrCardHeader>
                <IgrCardContent className={classes("body-content")} key={uuid()}>
                  <div className={classes("column-layout group_3")} key={uuid()}>
                    <div className={classes("column-layout group_4")}>
                      <img src={item.Photo} className={classes("image")} />
                      <div className={classes("row-layout group_5")}>
                        <p className={classes("typography__subtitle-2 text_1")}>
                          <span>{item.FirstName}</span>
                        </p>
                        <p className={classes("typography__subtitle-2 text_2")}>
                          <span>{item.LastName}</span>
                        </p>
                      </div>
                      <p className={classes("typography__overline text_3")}>
                        <span>{item.Position}</span>
                      </p>
                    </div>
                    <div className={classes("row-layout group_6")}>
                      <div className={classes("column-layout group_7")}>
                        <p className={classes("typography__overline text_3")}>
                          <span>Department</span>
                        </p>
                        <p className={classes("typography__subtitle-2 text_3")}>
                          <span>{item.Department}</span>
                        </p>
                      </div>
                      <div className={classes("column-layout group_7")}>
                        <p className={classes("typography__overline text_3")}>
                          <span>HIRE DATE</span>
                        </p>
                        <p className={classes("typography__subtitle-2 text_3")}>
                          <span>{item.HireDate}</span>
                        </p>
                      </div>
                    </div>
                    <div className={classes("column-layout group_8")}>
                      <div className={classes("row-layout group_9")}>
                        <span className={classes("material-icons icon")}>
                          <span key={uuid()}>mail</span>
                        </span>
                        <a href="" className={classes("typography__body-2 hyperlink")}>
                          <span>{item.Email}</span>
                        </a>
                      </div>
                      <div className={classes("row-layout group_9")}>
                        <span className={classes("material-icons icon")}>
                          <span key={uuid()}>phone_android</span>
                        </span>
                        <p className={classes("typography__body-2 text_4")}>
                          <span>{item.Phone}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </IgrCardContent>
              </IgrCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
