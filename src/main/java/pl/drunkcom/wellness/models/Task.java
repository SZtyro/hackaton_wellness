package pl.drunkcom.wellness.models;

import lombok.Data;
import lombok.EqualsAndHashCode;
import pl.drunkcom.core.model.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

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

    @Column
    @Lob
    private String description;

    @Column
    private String photoURL;

    //Activity can have multiple tasks, but one task can be assigned to only one activity
    @ManyToOne
    private Activity activity;

}
