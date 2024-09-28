package pl.drunkcom.wellness.campaign;

import lombok.Data;
import lombok.EqualsAndHashCode;
import pl.drunkcom.core.model.BaseEntity;
import pl.drunkcom.wellness.activity.Activity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
public class Campaign extends BaseEntity {

    @Column
    private String name;

    @Column
    private String city;

    @ManyToMany
    private List<Activity> activities;
}
