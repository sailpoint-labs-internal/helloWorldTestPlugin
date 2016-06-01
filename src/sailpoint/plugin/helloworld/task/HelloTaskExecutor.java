package sailpoint.plugin.helloworld.task;

import sailpoint.api.SailPointContext;
import sailpoint.object.Attributes;
import sailpoint.object.TaskResult;
import sailpoint.object.TaskSchedule;
import sailpoint.plugin.task.AbstractPluginTaskExecutor;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class HelloTaskExecutor extends AbstractPluginTaskExecutor {
    private static final Log log = LogFactory.getLog(HelloTaskExecutor.class);

    @Override
    public void execute(SailPointContext context, TaskSchedule taskSchedule, TaskResult taskResult, Attributes<String, Object> stringObjectAttributes) throws Exception {
        log.info("Task executing");
    }

    /**
     * Clean up any statics, connections etc. or anything that will prevent this class from being unloaded.
     */
    @Override
    public void terminate() {
        //To change body of implemented methods use File | Settings | File Templates.
    }
}
