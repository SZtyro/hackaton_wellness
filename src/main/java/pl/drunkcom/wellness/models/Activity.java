package pl.drunkcom.wellness.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import pl.drunkcom.core.model.BaseEntity;
import pl.drunkcom.wellness.interfaces.Gradable;

import javax.persistence.*;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class Activity extends BaseEntity implements Gradable {

    @Column
    private String name;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "activity")
    @OrderBy("index asc")
    private List<Task> tasks;

    @ManyToOne()
    @JoinColumn(name = "parent_id")
//    @JsonIgnoreProperties("parent")
    @JsonIgnore
    private Activity parent;


    @Column
    private String author;

    @ManyToMany
    private List<Campaign> campaigns;

    @Column
    private Integer countOfGrades = 0;

    @Column
    private Double sumGrade = 0d;

    @Column
    @Lob
    private String description;

    @ElementCollection
    @Column
    private List<String> guests;

    @ManyToMany
    private List<ActivityTag> activityTag;

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
