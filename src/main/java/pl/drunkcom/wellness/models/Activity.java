package pl.drunkcom.wellness.models;

import lombok.Data;
import lombok.EqualsAndHashCode;
import pl.drunkcom.core.model.BaseEntity;
import pl.drunkcom.wellness.enumerable.EnumActivityType;
import pl.drunkcom.wellness.interfaces.Gradable;

import javax.persistence.*;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class Activity extends BaseEntity implements Gradable {

    @Column
    private String name;

    @OneToMany
    private List<Task> tasks;

    @ManyToMany
    private List<Campaign> campaigns;

    @Column
    private Integer countOfGrades = 0;

    @Column
    private Double sumGrade = 0d;

    //Type enum

    //TODO: Add tags

    @Enumerated(EnumType.STRING)
    private EnumActivityType type;

    @Override
    public int getCountOfGrades() {
        return countOfGrades;
    }

    @Override
    public double getSumGrade() {
        return sumGrade;
    }

    @Override
    public void setCountOfGrades(int countOfGrades) {
        this.countOfGrades = countOfGrades;
    }

    @Override
    public void setSumGrade(double sumGrade) {
        this.sumGrade = sumGrade;
    }

    //User
}
