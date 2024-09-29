package pl.drunkcom.wellness.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.EqualsAndHashCode;
import pl.drunkcom.core.model.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
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
    private Integer index = 0;

    @Column
    private int stage;

    @ManyToOne
    @JoinColumn(name = "activity_id")
    @JsonIgnoreProperties("tasks")
    private Activity activity;

}
