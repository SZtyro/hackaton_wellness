package pl.drunkcom.wellness.models;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
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

    @Column
    private String author;

    @OneToMany
    private List<Task> tasks;

    @ManyToMany
    private List<Campaign> campaigns;

    @Column
    private Integer countOfGrades = 0;

    @Column
    private Double sumGrade;

    //Type enum

    @Enumerated(EnumType.STRING)
    private EnumActivityType type;

    @Override
    public int getCountOfGrades() {
        return countOfGrades;
    }

    @Override
    public double getSumGrade() {
        return 0;
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
