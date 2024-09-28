package pl.drunkcom.wellness.task;

import org.springframework.stereotype.Repository;
import pl.drunkcom.core.interfaces.BaseRepository;

@Repository
public interface TaskRepository extends BaseRepository<Task> {
}
