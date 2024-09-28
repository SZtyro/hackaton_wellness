package pl.drunkcom.wellness.models;

import lombok.Data;
import lombok.EqualsAndHashCode;
import pl.drunkcom.core.model.BaseEntity;
import pl.drunkcom.wellness.interfaces.Gradable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
public class Campaign extends BaseEntity implements Gradable {

    @Column
    private String name;

    @Column
    private String city;

    @ManyToMany
    private List<Activity> activities;

    @Column
    private Integer countOfGrades;

    @Column
    private Double sumGrade;

    @Column
    @Lob
    private String description;


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

}
