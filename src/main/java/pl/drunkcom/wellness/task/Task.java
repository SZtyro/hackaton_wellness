package pl.drunkcom.wellness.task;

import lombok.Data;
import lombok.EqualsAndHashCode;
import pl.drunkcom.core.model.BaseEntity;
import pl.drunkcom.wellness.activity.Activity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class Task extends BaseEntity {

    @Column
    private String name;

    @Column
    private String coordinates;

    @Column
    private int stage;

    //Activity can have multiple tasks, but one task can be assigned to only one activity
    @ManyToOne
    private Activity activity;

}
