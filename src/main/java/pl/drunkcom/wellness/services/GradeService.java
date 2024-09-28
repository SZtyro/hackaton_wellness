package pl.drunkcom.wellness.services;

import org.springframework.stereotype.Service;
import pl.drunkcom.core.interfaces.BaseRepository;
import pl.drunkcom.core.model.BaseEntity;
import pl.drunkcom.core.service.BaseService;
import pl.drunkcom.wellness.interfaces.Gradable;

@Service
public abstract class GradeService<T extends BaseEntity & Gradable, R extends BaseRepository<T>> extends BaseService<T , R> {

    public T addGrade(T entity, Double grade){
        entity.setCountOfGrades(entity.getCountOfGrades() + 1);
        entity.setSumGrade(entity.getSumGrade() + grade);

        return entity;
    }

    public Double getAverageGrade(T entity){
        return entity.getSumGrade() / entity.getCountOfGrades();
    }
}
