import * as React from 'react';
// import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from './month-appointments';

// const currentDate = '2020-12-29';

const SchedulerClass = () => {
    return(
        <div>
            <Scheduler data={appointments}>
                
                <MonthView />
                <Appointments />
            </Scheduler>
        </div>
    ) 
}

export default SchedulerClass;